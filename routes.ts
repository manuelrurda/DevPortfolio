import { usePathname } from "next/navigation";

const getRoutes = () => {
  const pathname = usePathname();
  return [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/projects`,
      label: "Projects",
      active: pathname === `/projects`,
    },
    // {
    //   href: `/experience`,
    //   label: "Experience",
    //   active: pathname === `/experience`,
    // },
    // {
    //   href: `/contact`,
    //   label: "Contact",
    //   active: pathname === `/contact`,
    // },
  ];
};

export default getRoutes;
