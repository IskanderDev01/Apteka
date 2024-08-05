import Logo from '../../../shared/assets/logo.svg';
import LanguageSwitcher from 'shared/ui/LangSwitcher';
import { useTranslation, TFunction } from 'react-i18next';

export const Navbar = () => {
    const { t }: { t: TFunction } = useTranslation();

    return (
        <div className="container mx-auto px-4 max-w-full lg:max-w-screen-xl h-[60px] ">
            <div className="flex items-center justify-between h-full">
                <div className="text-2xl font-medium flex items-center">
                    <Logo className="w-24 h-24" />
                </div>
                <div className="mt-2 sm:mt-0">
                    <LanguageSwitcher className="mr-2" />
                </div>
            </div>
        </div>
    );
};
