const getAllProjectsQuery = /* GraphQL */ `
  query {
    projectCollection(order: displayOrder_ASC) {
      items {
        slug
        displayOrder
        titleDisplay
        name
        tagline
        description
        keyRoles
        url
        categories
        techTitle
        techDescription
        tech
        mainImage {
          url
          title
        }
        mashupImage {
          url
          title
        }
        mobileImagesCollection {
          items {
            url
            title
          }
        }
        displayImage {
          url
          title
        }
        videoFallback {
          url
          title
        }
        video {
          url
          title
        }
      }
    }
  }
`;
export default getAllProjectsQuery;
