import { IProjectFields } from '@/lib/types/contentful';
import { NextProject } from '@/lib/types/next-project';

import Layout from '@/components/layout/Layout';
import {
  ProjectDescription,
  ProjectDisplay,
  ProjectIntro,
  ProjectMobile,
  ProjectNext,
  ProjectPages,
  ProjectTech,
} from '@/components/project';
import Seo from '@/components/Seo';

type ProjectViewProps = {
  nextProject: NextProject;
  project: IProjectFields;
};

export default function ProjectView({
  nextProject,
  project,
}: ProjectViewProps) {
  const {
    categories,
    description,
    displayImage,
    keyRoles,
    mainImage,
    mashupImage,
    mobileImages,
    name,
    primaryColour,
    secondaryColour,
    tagline,
    tech,
    techDescription,
    techTitle,
    titleDisplay,
    video,
    videoFallback,
    url,
  } = project;

  return (
    <Layout>
      <Seo />

      <ProjectIntro
        image={mainImage}
        primary={primaryColour}
        secondary={secondaryColour}
        name={name}
        title={titleDisplay}
      ></ProjectIntro>

      <ProjectDescription
        categories={categories}
        description={description}
        keyRoles={keyRoles}
        tagline={tagline}
        url={url}
      ></ProjectDescription>

      {video && <p>Video</p>}

      {!video && videoFallback && (
        <ProjectDisplay image={videoFallback}></ProjectDisplay>
      )}

      <ProjectTech
        tech={tech}
        title={techTitle}
        description={techDescription}
      ></ProjectTech>

      <ProjectPages image={mashupImage}></ProjectPages>

      {mobileImages && <ProjectMobile images={mobileImages}></ProjectMobile>}

      <ProjectDisplay image={displayImage}></ProjectDisplay>

      <ProjectNext project={nextProject}></ProjectNext>
    </Layout>
  );
}
