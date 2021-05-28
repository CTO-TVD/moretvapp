// Type definitions for Zosa - DT-ParentalControl API Rev. 1
// Project: NGTV
// Definitions by: Maik Schulze
// Definitions: https://github.com/CTO-TVD/src-thirdparty

declare namespace zosa {

  /**
    * @ngdoc interface
    * @name DTParentalCtrlFeaturesCfg
    *
    * @description
    * This object has one property for each parental control feature. The value of each property defines the locking status of the corresponding feature.
    *
    */
  interface DTParentalCtrlFeaturesCfg {

    /**
     * @ngdoc property
     * @name DTParentalCtrlFeaturesCfg#SubscribedContent
     * @propertyOf DTParentalCtrlFeaturesCfg
     *
     * @description
     * Lock Subscription.
     * 
     * Indicates whether to lock the content that has been subscribed by subscribers.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    SubscribedContent: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTParentalCtrlFeaturesCfg#UnratedContent
     * @propertyOf DTParentalCtrlFeaturesCfg
     *
     * @description
     * Lock Content Without Rating Info.
     * 
     * Indicates whether to lock all the content without parental control information, including live TV, program, VOD, TSTV, and TV Archive content.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    UnratedContent: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTParentalCtrlFeaturesCfg#EroticCategory
     * @propertyOf DTParentalCtrlFeaturesCfg
     *
     * @description
     * Lock Erotic Category.
     * 
     * Indicates whether to lock the erotic category.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    EroticCategory: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTParentalCtrlFeaturesCfg#MaskRatedContent
     * @propertyOf DTParentalCtrlFeaturesCfg
     *
     * @description
     * Mask According To Age Rating.
     * 
     * Indicates whether the contents which's parent control level are higher than the current parent control level display on the searching result.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    MaskRatedContent: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTParentalCtrlFeaturesCfg#ComfortFeature
     * @propertyOf DTParentalCtrlFeaturesCfg
     *
     * @description
     * Channel Unlock (ComfortFeature) configuration.
     * 
     * A daily recurring time period in which all channels are not parentally locked. In this period, subscribers can play the channel without entering the PCON PIN.
     * 
     * • Note: Only operators can set this parameter, and subscribers cannot modify it.
     *
     * @returns {DTParentalCtrlComfortFeatureCfg}
     *
     */
    ComfortFeature: DTParentalCtrlComfortFeatureCfg;

  }

  /**
    * @ngdoc interface
    * @name DTParentalCtrlFeatureCfg
    *
    * @description
    * 
    */
  interface DTParentalCtrlFeatureCfg {

    /**
     * @ngdoc property
     * @name DTParentalCtrlFeatureCfg#editable
     * @propertyOf DTParentalCtrlFeatureCfg
     *
     * @description
     * Is subscriber allowed to change the value of isLocked for this feature or not?
     *
     * @returns {boolean}
     *
     */
    editable: boolean;

    /**
     * @ngdoc property
     * @name DTParentalCtrlFeatureCfg#isLocked
     * @propertyOf DTParentalCtrlFeatureCfg
     *
     * @description
     * Should feature be parentally locked, i.e is PCON PIN required to access the feature or not?
     * 
     * • Note: Only writable if "editable" is true.
     *
     * @returns {boolean}
     *
     */
    isLocked: boolean;

  }

  /**
    * @ngdoc interface
    * @name DTParentalCtrlComfortFeatureCfg
    *
    * @description
    * 
    */
  interface DTParentalCtrlComfortFeatureCfg {


    /**
     * @ngdoc property
     * @name DTParentalCtrlComfortFeatureCfg#isLocked
     * @propertyOf DTParentalCtrlComfortFeatureCfg
     *
     * @description
     * Should feature be parentally locked, i.e is PCON PIN required to access the feature or not?
     * 
     * • Note: Only writable if "editable" is true.
     *
     * @returns {boolean}
     *
     */
    isLocked: boolean;

    /**
     * @ngdoc property
     * @name DTParentalCtrlComfortFeatureCfg#isSupported
     * @propertyOf DTParentalCtrlComfortFeatureCfg
     *
     * @description
     * This flag indicates if subscriber is allowed to use ComfortFeature.
     *
     * @returns {boolean}
     *
     */
    isSupported: boolean;

    /**
     * @ngdoc property
     * @name DTParentalCtrlComfortFeatureCfg#editable
     * @propertyOf DTParentalCtrlComfortFeatureCfg
     *
     * @description
     * Always false for ComfortFeature.
     * 
     * Subscriber is not allowed to modify any property of the ComfortFeature configuration.
     *
     * @returns {boolean}
     *
     */
    editable: boolean;


    /**
     * @ngdoc property
     * @name DTParentalCtrlComfortFeatureCfg#timeDuration
     * @propertyOf DTParentalCtrlComfortFeatureCfg
     *
     * @description
     * Time frame in seconds for which period the pin entry is unlocked.
     *
     * @returns {number}
     *
     */
    timeDuration: number;

    /**
     * @ngdoc property
     * @name DTParentalCtrlComfortFeatureCfg#timeFrame
     * @propertyOf DTParentalCtrlComfortFeatureCfg
     *
     * @description
     * Daily recurring time period when ComfortFeature may be activated by the subscriber.
     * The time frame is specified in the format “HHMMSS-HHMMSS” where start time and end time is in 24-hour format, local time.
     * 
     * For example, “100000-150000” means 10:00:00 to 15:00:00, The period can cross days. For example, if timeframe value is “190000-060000”, the period is from 19:00 on the day to 06:00 on the next day.
     * 
     * If the period overlaps that specified by AgeRatingCfg.timeFrame, the period specified by ComfortFeature.timeFrame prevails. In the overlapped period, subscribers can play the channel without entering the PCON PIN. 
     *
     * @returns {string}
     *
     */
    // not used at Youth protection 2.0
    //timeFrame: string;

  }

  /**
    * @ngdoc interface
    * @name DTAgeRatingsCfg
    *
    * @description
    * This object defines the locking status for all content rating levels.
    *
    */
  interface DTAgeRatingsCfg {

    /**
     * @ngdoc property
     * @name DTAgeRatingsCfg#0
     * @propertyOf DTAgeRatingsCfg
     *
     * @description
     * Indicates if content rated 0 should be locked.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    0: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTAgeRatingsCfg#6
     * @propertyOf DTAgeRatingsCfg
     *
     * @description
     * Indicates if content rated 6 should be locked.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    6: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTAgeRatingsCfg#12
     * @propertyOf DTAgeRatingsCfg
     *
     * @description
     * Indicates if content rated 12 should be locked.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    12: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTAgeRatingsCfg#16
     * @propertyOf DTAgeRatingsCfg
     *
     * @description
     * Indicates if content rated 16 should be locked.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    16: DTParentalCtrlFeatureCfg;

    /**
     * @ngdoc property
     * @name DTAgeRatingsCfg#18
     * @propertyOf DTAgeRatingsCfg
     *
     * @description
     * Indicates if content rated 18 should be locked.
     *
     * @returns {DTParentalCtrlFeatureCfg}
     *
     */
    18: DTParentalCtrlFeatureCfg;

  }

}
