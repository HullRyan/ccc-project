import { useRouter } from "next/router";
import { ChevronLeftCircle, ChevronLeftCircleFill } from "@geist-ui/icons";

export default function BackButton() {
	const router = useRouter();

	return (
		<>
			<div className="bottom-button-container" onClick={() => router.back()}>
				<div className="bottom-button">
					<ChevronLeftCircle size={30} />
				</div>
			</div>
			<style jsx>
				{`
					.bottom-button-container {
						position: absolute;
						bottom: 0;
						right: calc(1.34*16px);
						width: 3rem;
						height: 4rem;
						background: #fff;
						background-color: rgb(255, 255, 255);
						-webkit-transition: all 0.2s ease;
						transition: all 0.2s ease;
						border-radius: 6px;
						box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
						box-sizing: border-box;
						color: #000;
						background-color: #fff;
						display: flex;
						justify-content: center;
						border-radius: 500px 500px 0 0;
						z-index: 100;
					}
                    .bottom-button-container:hover {
                        cursor: pointer;
                        height: 4.5rem;
                    }
                    .bottom-button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 3rem;
                        width: 3rem;
                        border-radius: 50%;
                        -webkit-transition: all 0.2s ease;
						transition: all 0.2s ease;
                    }
				`}
			</style>
		</>
	);
}
