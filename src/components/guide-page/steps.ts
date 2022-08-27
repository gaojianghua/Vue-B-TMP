/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-27 13:31:55
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 14:07:18
 * @FilePath     : \web-B-tmp\src\components\guide-page\steps.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { Composer } from 'vue-i18n'
const steps = (i18n: Composer) => {
    return [
        {
            element: '#guide-start',
            popover: {
                title: i18n.t('guide.guideTitle'),
                description: i18n.t('guide.guideDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-hamburger',
            popover: {
                title: i18n.t('guide.hamburgerTitle'),
                description: i18n.t('guide.hamburgerDesc')
            }
        },
        {
            element: '#guide-breadcrumb',
            popover: {
                title: i18n.t('guide.breadcrumbTitle'),
                description: i18n.t('guide.breadcrumbDesc')
            }
        },
        {
            element: '#guide-search',
            popover: {
                title: i18n.t('guide.searchTitle'),
                description: i18n.t('guide.searchDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-full',
            popover: {
                title: i18n.t('guide.fullTitle'),
                description: i18n.t('guide.fullDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-theme',
            popover: {
                title: i18n.t('guide.themeTitle'),
                description: i18n.t('guide.themeDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-lang',
            popover: {
                title: i18n.t('guide.langTitle'),
                description: i18n.t('guide.langDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-tags',
            popover: {
                title: i18n.t('guide.tagTitle'),
                description: i18n.t('guide.tagDesc')
            }
        },
        {
            element: '#guide-sidebar',
            popover: {
                title: i18n.t('guide.sidebarTitle'),
                description: i18n.t('guide.sidebarDesc'),
                position: 'right-center'
            }
        }
    ]
}
export default steps
