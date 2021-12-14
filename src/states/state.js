// Default stored application state
export const initialState = {
  app: {
    uiSettings: {},
    backendApi: {},
    header: {
      navigationBar: {
        home: {
          name: "Feridun Akpinar",
          href: "/",
          isDisabled: false
        },
        code: {
          name: "Code",
          href: "/code",
          isDisabled: false
        },
        projects: {
          name: "Projects",
          href: "/projects",
          isDisabled: false
        },
        blogs: {
          name: "Blogs",
          href: "/blogs",
          isDisabled: false
        },
        volunteering: {
          name: "Volunteering",
          href: "/volunteering",
          isDisabled: false
        },
        aboutme: {
          name: "About me",
          href: "/aboutme",
          isDisabled: false
        }
      },
    },
    pages: {
      home: {
        lastUpdated: "N/A",
      },
      code: {
        lastUpdated: "N/A",
      },
      projects: {
        lastUpdated: "N/A",
      },
      blogs: {
        lastUpdated: "N/A",
      },
      volunteering: {
        lastUpdated: "N/A",
      },
      aboutme: {
        lastUpdated: "N/A",
      }
    },
  },
};

export const reducer = (state, action) => {
  let newState = {...state};
  switch (action.type) {
    case 'PAGE_UPDATED':
      let page = newState.app.pages[action.payload.pageName];
      if(page) page.lastUpdated = new Date().toString();
      break;
    default:
      throw new Error();
  }
  return newState;
};
