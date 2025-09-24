export const MainLayout = ({children}: {children: React.ReactNode}) => {
    return <main className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
}