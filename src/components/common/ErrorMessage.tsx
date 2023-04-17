import Layout from '@/components/layout/Layout';

type Props = {
  errors?: string;
};

export default function ErrorMessage({ errors }: Props) {
  return (
    <Layout>
      <p>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </p>
    </Layout>
  );
}
