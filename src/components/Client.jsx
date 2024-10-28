import { clients } from "../constants";
import styles from "../style";

const Client = () => {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} flex-wrap w-full`}>
				{clients.map((client) => (
					<div
						key={client.id}
						className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] group cursor-pointer transition duration-300`}
					>
						<div className="relative">
							<img
								src={client.logo}
								alt="client"
								className="sm:w-[192px] w-[100px] object-contain transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p className="font-poppins text-sm">{client.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Client;
