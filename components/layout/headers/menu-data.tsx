
interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}[];

/*
{
    id: 5,
    title: "Pages +",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/affiliate", title: "Affiliate" },
      { link: "/domain-search", title: "Domain Search" },
      { link: "/faq", title: "FAQ" },
      { link: "/privacy", title: "Privacy" },
      { link: "/server", title: "server" },
      { link: "/share-hosting", title: "share hosting" },
      { link: "/support", title: "support" },
      { link: "/team", title: "team" },
      { link: "/whois", title: "whois" },
      { link: "/login", title: "login" },
      { link: "/register", title: "register" },
      { link: "/recover", title: "recover" }, 
    ],
  },

  */




const menu_data:MenuItem[]  = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Uploader",
    link: "/uploader",
    has_dropdown: false,     
  },
  {
    id: 3,
    title: "Pipeline",
    link: "/pipeline",
    has_dropdown: false,     
  },
  {
    id: 6,
    title: "News",
    link: "/blog",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "News Default" },
      { link: "/blog-details", title: "News Details" }, 
    ],
  },
  {
    id: 7,
    title: "Contact",
    
    link: "/contact",
    has_dropdown: false, 
  },
  
];
export default menu_data;
