import { Button } from "@nextui-org/button";

export default function SignUpButtons({ isMobile = false, loggedIn = false }: { isMobile?: boolean, loggedIn?: boolean }) {
	return (
		<div className={`${!isMobile && 'hidden sm:flex sm:flex-row'} flex flex-col gap-2`}>
			{!loggedIn ? (
				<>
					<Button className="border border-slate-300" variant="light">Log In</Button>
					<Button className="bg-[#171717] text-white dark:bg-white dark:text-black">Sign Up</Button>
				</>
			) : (
				<>
					<Button className="border border-slate-300 w-full" variant="light">Log Out</Button>
				</>
			)}
		</div>
	);
}
