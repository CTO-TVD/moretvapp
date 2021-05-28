declare namespace telekom.backend {

    const enum MenuType {

        UNSPECIFIED_MENU = 0,
        MAIN_MENU = 1,
        SUB_MENU = 2,
        O_NA_2_4 = 3
    }

    interface MenuInfo {

        itemsOnScreen?: number;
        menuType: MenuType;
    }

    interface MenuItem {

        hideLabelOnBlur?: boolean;
        id?: string;
        label?: string;
    }

    interface DTGetRecommendationParams {

        channelMapId?: string;
        partnerMapId?: string;
    }

    interface DTSearchParams {

        channelMapId?: string;
        partnerMapId?: string;
        satellites?: string;
        appMapId?: string;
    }
}
