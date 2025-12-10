import MinimalFooter from "@/components/footer/MinimalFooter";
import Header from "@/components/header/Header";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center">{children}</main>
      <MinimalFooter />
    </>
  );
}
