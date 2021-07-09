import React from "react"
import HomeIcon from '@material-ui/icons/Home';
import ColorizeIcon from '@material-ui/icons/Colorize';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SidebarData = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon />,
        link: "/dashboard",
    },
    {
        id: 2,
        title: "Vaccine",
        icon: <ColorizeIcon />,
        link: "/vaccine",
    },
    {
        id: 3,
        title: "Beds",
        icon: <AirlineSeatFlatIcon />,
        link: "/bed",
    },
    {
        id: 4,
        title: "Oxygen Cylinders",
        icon: <HourglassEmptyIcon />,
        link: "/oxygen",
    },
    {
        id: 5,
        title: "Hospitals",
        icon: <LocalHospitalIcon />,
        link: "/hospital",
    },
    {
        id: 6,
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/dashboard",
    }
]