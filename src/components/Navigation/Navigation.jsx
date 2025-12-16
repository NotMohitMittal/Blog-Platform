import Dock from "./Dock";

const NavigationBar = ({ setSelectedPage }) => {
    // ============= ICONS =============
    const HomeIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
    );

    const ArchiveIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z" />
        </svg>
    );

    const ProfileIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    );

    const SettingsIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
    );
    
    const items = [
        {
            icon: <HomeIcon />,
            label: "Home",
            onClick: () => setSelectedPage("Home"),
        },
        {
            icon: <ArchiveIcon />,
            label: "AddBlog",
            onClick: () => setSelectedPage("Add-Blog"),
        },
        {
            icon: <ProfileIcon />,
            label: "Profile",
            onClick: () => console.log("Profile clicked"),
        },
        {
            icon: <SettingsIcon />,
            label: "Settings",
            onClick: () => console.log("Settings clicked"),
        },
    ];

    return (
        <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            spotlightColor="rgba(0, 229, 255, 0.2)"     // defines the brightness of the light in the nav section
        />
    );
};

export default NavigationBar;