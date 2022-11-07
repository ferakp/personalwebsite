// Default stored application state
export const initialState = {
  app: {
    uiSettings: {
      appScale: "Medium",
    },
    profile: {
      email: ["Feridun.Akpinar@gmail.com", "Contact email address"],
      github: ["ferakp", "Github username"]
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
          faIconName: "",
        },
        projects: {
          name: "Projects",
          href: "/projects",
          isDisabled: false,
          faIconName: "",
        },
        blogs: {
          name: "Blogs & Research",
          href: "/blogsresearch",
          isDisabled: false,
          faIconName: "",
        },
        volunteering: {
          name: "Volunteering & Contributions",
          href: "/volunteeringcontributions",
          isDisabled: false,
          faIconName: "",
        },
        aboutme: {
          name: "About me",
          href: "/aboutme",
          isDisabled: false,
          faIconName: "",
        },
        github: {
          name: "",
          href: "https://github.com/ferakp",
          isDisabled: false,
          faIconName: "fab github",
          type: "icon",
        },
        email: {
          name: "",
          href: "feridun.akpinar@gmail.com",
          isDisabled: false,
          faIconName: "fas envelope",
          type: "icon",
          tooltip: "Contact form",
        },
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
      blogsResearch: {
        lastUpdated: "N/A",
      },
      volunteeringContributions: {
        lastUpdated: "N/A",
      },
      aboutMe: {
        lastUpdated: "N/A",
      },
    },
    timeline: {
      posts: [
        {
          origin: "Code",
          originColor: "black",
          originIcon: "fas code",
          imgUrl: "./profilephoto.jpg",
          title: "Under development",
          text: `......
          `,
          releaseTime: new Date("Sun Nov 06 2021 17:46:55"),
          href: "#"
        },
      ],
    },
  },
};

export const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "PAGE_UPDATED":
      let page = newState.app.pages[action.payload.pageName];
      if (page) page.lastUpdated = new Date().toString();
      break;
    default:
      throw new Error();
  }
  return newState;
};
