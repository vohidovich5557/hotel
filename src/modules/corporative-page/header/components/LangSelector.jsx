import React, { memo, useEffect, useRef, useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import cn from 'classnames'
import { AmericaFlag, ButtonIcon, RussianFlag, TopIcon, UzbFlag } from '../../../../components/svgs/svg'

 const langData = [
    {
        id: 1,
        lang: 'Eng',
        flag: AmericaFlag,
    },
    {
        id: 2,
        lang: 'Rus',
        flag: RussianFlag,
    },
    {
        id: 3,
        lang: 'Uzb',
        flag: UzbFlag,
    },
]

function LangSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLang') || 'Uzb')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropRef = useRef(null)
    const handleLanguageSelect = (language) => {
        const { lang } = language
        setSelectedLanguage(language.lang)
        localStorage.setItem('selectedLang', lang)
        setIsDropdownOpen(false)
        // You can add additional logic here, such as updating the language in your app based on the selection
    }
    useEffect(() => {
        const storedLang = localStorage.getItem('selectedLang')
        if (storedLang) {
            setSelectedLanguage(storedLang)
        }
    }, [])
    useEffect(() => {
        function handleClick(event) {
            if (dropRef.current && !dropRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    return (
        <div className={cn(css(s.wrapper), 'flex-col items-center justify-center gap-2')}
            ref={dropRef}>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={css(s.langB)}>
                {selectedLanguage === 'Rus' && <RussianFlag />}
                {selectedLanguage === 'Uzb' && <UzbFlag />}
                {selectedLanguage === 'Eng' && <AmericaFlag />}

                <span className={css(s.langText)}>{selectedLanguage}</span>
                {isDropdownOpen ? (<TopIcon />) : (<ButtonIcon />)}
            </div>
            {isDropdownOpen && (
                <div className={cn(css(s.dropdown), 'flex flex-col items-center gap-[7px] h-auto absolute')}>
                    {langData.map((item) => {
                        if (item.lang === selectedLanguage) {
                            return null
                        }
                        return (
                            <div onClick={() => handleLanguageSelect(item)} key={item.id}
                                className={cn(css(s.langBox), 'flex items-center justify-center  pointer gap-7')}>
                                <span className={css(s.langText)}>
                                    {item.lang}
                                </span>
                                <item.flag />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default memo(LangSelector)

const s = StyleSheet.create({
    wrapper: {
        position: 'relative',
        cursor: 'pointer',
    },
    langB: {
        height: 'auto',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '0.625rem',
        paddingRight: '0.625rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.625rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#3A4C61',
        background: '#3A4C61',
        borderRadius: '13px'
    },
    langText: {
        color: '#fff',
        fontSize: '1.125rem',
    },
    dropdown: {
        transform: 'translateY(10px)',
        transition: 'all 0.5s ease',
        width: '6.75rem',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#3A4C61',
        background: '#3A4C61',
        borderRadius: '13px'
    },
    langBox: {
        height: '100%',
        width: '100%',
        ':hover': {
            backgroundColor: '#3A4C61',
        },
    },
})
