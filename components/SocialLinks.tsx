import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
	return (
		<div className="flex gap-4 text-2xl">
			<a
				href="https://www.linkedin.com/in/taran-glasson/"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-gray-600 transition-colors"
			>
				<FaLinkedin />
			</a>
			<a
				href="mailto:taranglasson@gmail.com"
				className="hover:text-gray-600 transition-colors"
			>
				<MdEmail />
			</a>
			<a
				href="https://github.com/glastara"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-gray-600 transition-colors"
			>
				<FaGithub />
			</a>
			<a
				href="https://www.youtube.com/@taran_glasson"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-gray-600 transition-colors"
			>
				<FaYoutube />
			</a>
		</div>
	);
}
