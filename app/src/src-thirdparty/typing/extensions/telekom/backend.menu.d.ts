/// <reference path="./backend.common.d.ts" />

declare namespace telekom.backend {

    /**
     * @ngdoc interface
     * @name MenuInfo
     *
     * @description
     *
     */
    interface MenuInfo {

        /**
         * @ngdoc property
         * @name MenuInfo#id
         * @propertyOf MenuInfo
         *
         * @description
         * Menu ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name MenuInfo#menuItems
         * @propertyOf MenuInfo
         *
         * @description
         * Menu list.
         *
         * @returns {MenuItem[]}
         *
         */
        menuItems: MenuItem[];

    }

    /**
     * @ngdoc interface
     * @name MenuItem
     *
     * @description
     *
     */
    interface MenuItem {

        /**
         * @ngdoc property
         * @name MenuItem#menuType
         * @propertyOf MenuItem
         *
         * @description
         * Menu type.
         *
         * @returns {string}
         *
         */
        menuType: string;

        /**
         * @ngdoc property
         * @name MenuItem#iconUrl
         * @propertyOf MenuItem
         *
         * @description
         * URL of a menu icon.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        iconUrl?: string;
        
        
        /**
         * @ngdoc property
         * @name MenuItem#iconClass
         * @propertyOf MenuItem
         *
         * @description
         * Css class name of a menu icon.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        iconClass?: string;

        /**
         * @ngdoc property
         * @name MenuItem#menuText
         * @propertyOf MenuItem
         *
         * @description
         * Menu name.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        menuText?: string;

        /**
         * @ngdoc property
         * @name MenuItem#visible
         * @propertyOf MenuItem
         *
         * @description
         * Indicates whether a menu is visible.
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        visible?: boolean;

        /**
         * @ngdoc property
         * @name MenuItem#hubVisible
         * @propertyOf MenuItem
         *
         * @description
         * Indicates whether the Hub mapping a menu is visible.
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        hubVisible?: boolean;

        /**
         * @ngdoc property
         * @name MenuItem#action
         * @propertyOf MenuItem
         *
         * @description
         * Operation performed when a menu is selected.
         * 
         * • Optional.
         *
         * @returns {Action}
         *
         */
        action?: Action;

        /**
         * @ngdoc property
         * @name MenuItem#focus
         * @propertyOf MenuItem
         *
         * @description
         * Operation performed when the focus is moved to a menu.
         * 
         * • Optional.
         *
         * @returns {Focus}
         *
         */
        focus?: Focus;

        /**
         * @ngdoc property
         * @name MenuItem#subMenu
         * @propertyOf MenuItem
         *
         * @description
         * Submenu list.
         * 
         * • Optional.
         *
         * @returns {MenuInfo}
         *
         */
        subMenu?: MenuInfo;

    }

    /**
     * @ngdoc interface
     * @name DTGetMenuParams
     *
     * @description
     * Input parameter for the ZOSA custom api to retrieve a specified menu.
     *
     */
    interface DTGetMenuParams {

        /**
         * @ngdoc property
         * @name DTGetMenuParams#id
         * @propertyOf DTGetMenuParams
         *
         * @description
         * ID of a menu info object to get.
         *
         * @returns {string}
         *
         */
        id: string;

    }
    
}
