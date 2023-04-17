import { GetStaticPaths, GetStaticProps } from 'next';

import { IProjectFields } from '@/lib/types/contentful';
import { NextProject } from '@/lib/types/next-project';
import { requestProjects } from '@/lib/utils/contentful';

import ErrorMessage from '@/components/common/ErrorMessage';
import { ProjectView } from '@/components/project';

type Props = {
  errors?: string;
  nextProject?: NextProject;
  project?: IProjectFields;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await requestProjects();

  const paths = projects.map((project: IProjectFields) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await requestProjects();

  try {
    const slug = params?.slug;
    const index = projects.findIndex(
      (project: IProjectFields) => project.slug === slug
    );
    const nextIndex = index >= projects.length - 1 ? 0 : index + 1;

    const nextProject: NextProject = {
      image: projects[nextIndex].displayImage,
      primary: projects[nextIndex].primaryColour,
      secondary: projects[nextIndex].secondaryColour,
      slug: projects[nextIndex].slug,
      title: projects[nextIndex].titleDisplay,
    };

    return {
      props: {
        project: projects[index],
        nextProject,
      },
    };
  } catch (err) {
    let message = 'unknown error';
    if (err instanceof Error) message = err.message;
    else message = String(err);
    return {
      props: {
        errors: message,
      },
    };
  }
};

export default function Slug({ errors, nextProject, project }: Props) {
  if (errors) return <ErrorMessage errors={errors} />;
  return (
    project &&
    nextProject && (
      <ProjectView nextProject={nextProject} project={project}></ProjectView>
    )
  );
}
