import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AboutUs",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      &copy; Next JS is GREAT!!
    </>
  );
}
