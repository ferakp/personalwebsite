// Default stored application state
export const initialState = {
  app: {
    uiSettings: {
      appScale: "Medium"
    },
    profile: {
      email: "Feridun.Akpinar@gmail.com",
      github: "ferakp",
      linkedin: "akpinarferidun92"
    },
    backendApi: {},
    header: {
      navigationBar: {
        home: {
          name: "Feridun Akpinar",
          href: "/",
          isDisabled: false,
          faIconName: "",
        },
        code: {
          name: "Code",
          href: "/code",
          isDisabled: false,
          faIconName: ""
        },
        projects: {
          name: "Projects",
          href: "/projects",
          isDisabled: false,
          faIconName: ""
        },
        blogs: {
          name: "Blogs & Research",
          href: "/blogs",
          isDisabled: false,
          faIconName: ""
        },
        volunteering: {
          name: "Volunteering & Contributions",
          href: "/volunteering",
          isDisabled: false,
          faIconName: ""
        },
        aboutme: {
          name: "About me",
          href: "/aboutme",
          isDisabled: false,
          faIconName: ""
        },
        linkedIn: {
          name: "",
          href: "https://linkedin.com/in/akpinarferidun92/",
          isDisabled: false,
          faIconName: "fab linkedin",
          type: "icon"
        },
        github: {
          name: "",
          href: "https://github.com/ferakp",
          isDisabled: false,
          faIconName: "fab github",
          type: "icon"
        },
        email: {
          name: "",
          href: "feridun.akpinar@gmail.com",
          isDisabled: false,
          faIconName: "fas envelope",
          type: "icon"
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
