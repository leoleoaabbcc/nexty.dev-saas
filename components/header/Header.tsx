import { UserAvatar } from "@/components/header/UserAvatar";
import { Link as I18nLink } from "@/i18n/routing";
import { getSession } from "@/lib/auth/server";
import { user as userSchema } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
type User = typeof userSchema.$inferSelect;

const Header = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="py-2 backdrop-blur-md sticky top-0 z-50">
      <nav className="flex justify-between items-center container max-w-8xl mx-auto">
        <div className="flex items-center space-x-6 md:space-x-12">
          <I18nLink href="/" title="BitsFactor" prefetch={true} className="flex items-center space-x-2">
            <Image src="/bitsfactor.svg" alt="BitsFactor" width={24} height={24} />
            <span className={cn("text-lg font-semibold highlight-text")}>BitsFactor</span>
          </I18nLink>
        </div>

        <div className="flex items-center gap-x-2 flex-1 justify-end">
          <div className="flex items-center gap-x-2">
            <UserAvatar user={user as User} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
