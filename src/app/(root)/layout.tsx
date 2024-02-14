
import Header from "@/components/shared/Header1"
import Header2 from "@/components/shared/Header2"
import SubHeader from "@/components/shared/SubHeader"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-col h-screen">
        <SubHeader/>
        <Header/>
        <Header2/>
        <main className="flex-1" >{children}</main>

      </div>
    )
  }
  