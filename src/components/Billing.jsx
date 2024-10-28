import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
	<section
		id="product"
		className={`${layout.sectionReverse} relative overflow-hidden py-12 px-6 sm:px-16`}
	>
		<div className={`${layout.sectionImgReverse} relative`}>
			<img
				src={bill}
				alt="billing overview illustration"
				className="w-full h-full relative z-10 transition-transform duration-500 ease-in-out transform hover:scale-105"
			/>
			{/* Gradient Overlays */}
			<div className="absolute z-5 -left-[40%] top-0 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-white/40 to-transparent opacity-70 animate-pulse" />
			<div className="absolute z-0 -left-[35%] bottom-0 w-[70%] h-[70%] rounded-full bg-gradient-to-r from-pink-400 to-pink-200 opacity-60 animate-pulse delay-1000" />
		</div>

		<div className={`${layout.sectionInfo} text-left sm:text-center`}>
			<h2 className={`${styles.heading2} text-gray-800`}>
				Easily control your <br className="sm:block hidden" /> billing & invoicing
			</h2>
			<p className={`${styles.paragraph} max-w-lg mt-5 text-gray-600`}>
				Experience seamless billing with intuitive controls. Manage invoices
				effortlessly and keep your finances organized and accessible.
			</p>
			<div className="flex flex-row justify-center sm:justify-start flex-wrap sm:mt-10 mt-6 gap-5">
				{/* App Store Links */}
				<img
					src={apple}
					alt="Download on Apple Store"
					className="w-[128px] h-[42px] object-contain cursor-pointer transition-transform hover:scale-105 active:scale-95"
					aria-label="Apple Store Link"
				/>
				<img
					src={google}
					alt="Download on Google Play"
					className="w-[128px] h-[42px] object-contain cursor-pointer transition-transform hover:scale-105 active:scale-95"
					aria-label="Google Play Store Link"
				/>
			</div>
		</div>
	</section>
);

export default Billing;
