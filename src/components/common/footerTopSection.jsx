import React from "react";

const footerTopSection = () => {
	return (
		<section className="pb-2 row">
			<div className="col-12 col-md-6">
				<div>
					<p className="font-iranSans footer-text">
						پوشش لحظه به لحظه لیگ برتر فوتبال انگلیس. آخرین جدول رده بندی، نتایج
						بازی ها، بازی های پیش رو و برترین بازیکنان فصل.داده های این وبسایت
						از وبسایت{" "}
						<a
							href="https://www.api-football.com/documentation-v3"
							target={"_blank"}>
							API-Footbal
						</a>{" "}
						که یک سرویس Restful API برای داده های فوتبالی روز دنیا ارائه می دهد
						گرفته میشود.
					</p>
				</div>
			</div>
			<div className="col-12 col-md-6 d-flex flex-column justify-content-md-center">
				<div className="footer-logo d-flex justify-content-end">
					PREMIER LEAGUE
				</div>
				<div className="d-flex justify-content-end">
					<span className="year">2021-2022</span>
				</div>
			</div>
		</section>
	);
};

export default footerTopSection;
