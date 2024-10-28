import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex-1 flex-col justify-start mr-10">
				<img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
				<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
					A new way to make payments easy, reliable, and secure.
				</p>
				<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-4">
					Contact us: support@hoobank.com | +1 234 567 890
				</p>
			</div>
			<div className="flex-[1.5] w-full flex flex-row justify-between md:mt-0 mt-10">
				{footerLinks.map((footerLink) => (
					<div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
						<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
							{footerLink.title}
						</h4>
						<ul className="list-none mt-4">
							{footerLink.links.map((link, index) => (
								<li
									key={link.name}
									className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
										index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
									}`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>

		<div className="w-full flex justify-between items-center md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
			<div className="flex flex-col md:flex-row md:items-center">
				<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
					2021 HooBank. All Rights Reserved.
				</p>
				<form className="mt-4 md:mt-0 md:ml-4">
					<input
						type="email"
						placeholder="Subscribe to our newsletter"
						className="p-2 rounded-l-md border border-gray-300"
					/>
					<button className="p-2 bg-blue-gradient text-white rounded-r-md">
						Subscribe
					</button>
				</form>
			</div>
			<div className="flex flex-row md:mt-0 mt-6">
				{socialMedia.map((social, index) => (
					<div key={social.id} className="relative group">
						<img
							src={social.icon}
							alt="social icon"
							className={`w-[21px] h-[21px] object-contain cursor-pointer ${
								index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
							}`}
						/>
						<span className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-black text-white text-xs p-1 rounded">
							{social.name}
						</span>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
