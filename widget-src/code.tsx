const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text, Input, Ellipse } =
	widget;

const colourGrey = "#B3B3B3";
const colourDarkGrey = "#757575";
const colourBorderGrey = "#cccccc";
const color = "#cccccc";

function PropertyMenuWidget() {
	const [pageType, setPageType] = useSyncedState("pageType", "layout-1");

	const pageTypeOptions = [
		{ option: "connector", label: "--->" },
		{ option: "spacer", label: "□ 80*80" },
		{ option: "layout-10", label: "Account" }, // Reg
		{ option: "layout-7", label: "Archive" }, // Reg
		{ option: "layout-13", label: "Cart" }, // Tiny
		{ option: "layout-14", label: "Checkout" }, // Tiny
		{ option: "layout-5", label: "Child" }, // Reg
		{ option: "layout-9", label: "Collection" }, //Reg
		{ option: "layout-8", label: "Curated Archive" }, // Reg
		{ option: "layout-15", label: "External" }, // Tiny
		{ option: "layout-2", label: "Homepage" }, //Wide
		{ option: "layout-1", label: "Landing" }, // Wide
		{ option: "layout-17", label: "Legals" }, // Tiny
		{ option: "layout-3", label: "Parent" }, // Wide
		{ option: "layout-6", label: "Product" }, // Small
		{ option: "layout-19", label: "Products" }, // Stacked
		{ option: "layout-4", label: "Results" }, // Wide
		{ option: "layout-11", label: "Single Page" }, // Small
		{ option: "layout-12", label: "Single Pages" }, // Stacked
		{ option: "layout-16", label: "Tool" }, // Tiny
		{ option: "layout-18", label: "404" }, // Tiny
	];

	const layoutColors = {
		"layout-1": "#B4E222",
		"layout-2": "#76AE3E",
		"layout-3": "#76AE3E",
		"layout-4": "#9747FF",
		"layout-5": "#FFCD29",
		"layout-6": "#FFAFA8",
		"layout-7": "#F17F4E",
		"layout-8": "#5BBAFF",
		"layout-9": "#73BFBB",
		"layout-10": "#CD8E44",
		"layout-11": "#FFCD29",
		"layout-12": "#FFCD29",
		"layout-13": "#FF63A5",
		"layout-14": "#FF63A5",
		"layout-15": "#75EED1",
		"layout-16": "#9747FF",
		"layout-17": "#7777dd",
		"layout-18": "#FB6543",
		"layout-19": "#FFAFA8",
	};

	const [title, setTitle] = useSyncedState("title", "");
	const [location, setLocation] = useSyncedState("location", "");

	let edgeRadius = 8;
	let fills = pageType === "connector" ? "#FFFFFF00" : "#ccc";
	let lines = pageType === "connector" ? "#FFFFFF00" : "#ccc";

	usePropertyMenu(
		[
			{
				itemType: "dropdown",
				propertyName: "pageTypes",
				tooltip: "Page Type",
				selectedOption: pageType,
				options: pageTypeOptions,
			},
			{
				itemType: "separator",
			},
			{
				itemType: "link",
				propertyName: "credits",
				tooltip: `Forty Eight Point One`,
				href: "https://fortyeight.one",
				icon: `<svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#ffffff" opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
			},
			{
				itemType: "separator",
			},
			{
				itemType: "link",
				propertyName: "credits",
				tooltip: `Joseph Lion`,
				href: "https://github.com/Joseph-Lion",
				icon: `<svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z" fill="#ffffff" opacity="0.6"></path> </g></svg>`,
			},
		],
		({ propertyName, propertyValue }) => {
			if (propertyName === "pageTypes") {
				setPageType(propertyValue);
			} else if (propertyName === "action") {
				console.log(propertyName);
			}
		}
	);

	return (
		<AutoLayout // Wrapper
			stroke={lines}
			strokeWidth={
				pageType === "layout-12" ||
				pageType === "layout-19" ||
				pageType === "spacer"
					? 0
					: 4
			}
			cornerRadius={edgeRadius}
			strokeAlign="center"
			fill={
				pageType === "layout-12" ||
				pageType === "layout-19" ||
				pageType === "spacer"
					? "#00000000"
					: fills
			}
			verticalAlignItems="center"
			direction="vertical"
			spacing={0}>
			{(pageType === "layout-1" ||
				pageType === "layout-2" ||
				pageType === "layout-3" ||
				pageType === "layout-4") && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout // Page Type
							width={800}
							fill="#fff"
							padding={{ top: 18, right: 0, bottom: 0, left: 26 }}>
							<Text
								fontSize={24}
								horizontalAlignText={"left"}
								fill={layoutColors[pageType] || "#000000"}>
								{pageTypeOptions.find((f) => f.option === pageType).label}
							</Text>
						</AutoLayout>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 6, right: 0, bottom: 0, left: 26 }}>
						<Input // Title
							value={title}
							placeholder="Page Title"
							onTextEditEnd={(e) => {
								setTitle(e.characters);
							}}
							fontSize={40}
							letterSpacing={-0.4}
							lineHeight={54}
							fill={colourDarkGrey}
							width={774}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 10, right: 0, bottom: 16, left: 26 }}>
						<Input // Set Location
							value={location}
							placeholder="/"
							onTextEditEnd={(e) => {
								setLocation(e.characters);
							}}
							fontSize={24}
							letterSpacing={-0.4}
							lineHeight={54}
							fill={colourGrey}
							width={774}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>
				</>
			)}

			{(pageType === "layout-5" ||
				pageType === "layout-7" ||
				pageType === "layout-8" ||
				pageType === "layout-9" ||
				pageType === "layout-10") && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout // Page Type
							width={624}
							fill="#fff"
							padding={{ top: 18, right: 0, bottom: 0, left: 26 }}>
							<Text
								fontSize={24}
								horizontalAlignText={"left"}
								fill={layoutColors[pageType] || "#000000"}>
								{pageTypeOptions.find((f) => f.option === pageType).label}
							</Text>
						</AutoLayout>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 6, right: 0, bottom: 0, left: 26 }}>
						<Input // Title
							value={title}
							placeholder="Page Title"
							onTextEditEnd={(e) => {
								setTitle(e.characters);
							}}
							fontSize={40}
							letterSpacing={-0.4}
							lineHeight={54}
							fill={colourDarkGrey}
							width={598}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 10, right: 0, bottom: 16, left: 26 }}>
						<Input // Set Location
							value={location}
							placeholder="/"
							onTextEditEnd={(e) => {
								setLocation(e.characters);
							}}
							fontSize={24}
							letterSpacing={-0.4}
							lineHeight={54}
							fill={colourGrey}
							width={598}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>
				</>
			)}

			{(pageType === "layout-11" || pageType === "layout-6") && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout // Page Type
							width={448}
							fill="#fff"
							padding={{ top: 18, right: 0, bottom: 0, left: 26 }}>
							<Text
								fontSize={24}
								horizontalAlignText={"left"}
								fill={layoutColors[pageType] || "#000000"}>
								{pageTypeOptions.find((f) => f.option === pageType).label}
							</Text>
						</AutoLayout>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 6, right: 0, bottom: 0, left: 26 }}>
						<Input // Title
							value={title}
							placeholder="Page Title"
							onTextEditEnd={(e) => {
								setTitle(e.characters);
							}}
							fontSize={40}
							letterSpacing={-0.4}
							lineHeight={54}
							fill={colourDarkGrey}
							width={420}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 22, right: 0, bottom: 29, left: 26 }}>
						<Input // Set Location
							value={location}
							placeholder="/"
							onTextEditEnd={(e) => {
								setLocation(e.characters);
							}}
							fontSize={24}
							letterSpacing={-0.4}
							fill={colourGrey}
							width={420}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>

					{/* <AutoLayout width={515} fill="#f3f3f3"></AutoLayout> */}
				</>
			)}

			{(pageType === "layout-12" || pageType === "layout-19") && (
				<>
					<AutoLayout // Stacked
						// width={448}
						padding={2}
						verticalAlignItems="end"
						direction="horizontal">
						<AutoLayout
							stroke={lines}
							strokeWidth={4}
							cornerRadius={{
								topLeft: 8,
								topRight: 8,
								bottomLeft: 8,
								bottomRight: 0,
							}}
							strokeAlign="center"
							fill={fills}
							verticalAlignItems="center"
							direction="vertical"
							spacing={0}>
							<AutoLayout
								direction="horizontal" // Row 1
							>
								<AutoLayout // Page Type
									width={412}
									fill="#fff"
									padding={{ top: 18, right: 0, bottom: 0, left: 26 }}>
									<Text
										fontSize={24}
										horizontalAlignText={"left"}
										fill={layoutColors[pageType] || "#000000"}>
										{pageTypeOptions.find((f) => f.option === pageType).label}
									</Text>
								</AutoLayout>
							</AutoLayout>
							<AutoLayout
								fill="#fff"
								padding={{ top: 6, right: 0, bottom: 0, left: 26 }}>
								<Input // Title
									value={title}
									placeholder="Page Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									letterSpacing={-0.4}
									lineHeight={54}
									fill={colourDarkGrey}
									width={386}
									inputFrameProps={{
										fill: "#fff",
									}}
									inputBehavior="wrap"
								/>
							</AutoLayout>
							<AutoLayout
								fill="#fff"
								padding={{ top: 22, right: 0, bottom: 29, left: 26 }}>
								<Input // Set Location
									value={location}
									placeholder="/"
									onTextEditEnd={(e) => {
										setLocation(e.characters);
									}}
									fontSize={24}
									letterSpacing={-0.4}
									fill={colourGrey}
									width={386}
									inputFrameProps={{
										fill: "#fff",
									}}
									inputBehavior="wrap"
								/>
							</AutoLayout>
						</AutoLayout>

						<AutoLayout
							stroke={lines}
							strokeWidth={4}
							cornerRadius={{
								topLeft: 0,
								topRight: 8,
								bottomLeft: 0,
								bottomRight: 0,
							}}
							fill="#fff"
							strokeAlign="center"
							verticalAlignItems="center"
							direction="vertical"
							width={18}
							height={158}
							spacing={0}></AutoLayout>

						<AutoLayout
							stroke={lines}
							strokeWidth={4}
							cornerRadius={{
								topLeft: 0,
								topRight: 8,
								bottomLeft: 0,
								bottomRight: 8,
							}}
							fill="#fff"
							strokeAlign="center"
							verticalAlignItems="center"
							direction="vertical"
							width={18}
							height={124}
							spacing={0}></AutoLayout>
					</AutoLayout>
				</>
			)}

			{(pageType === "layout-13" ||
				pageType === "layout-14" ||
				pageType === "layout-15" ||
				pageType === "layout-16" ||
				pageType === "layout-17" ||
				pageType === "layout-18") && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout // Page Type
							width={371}
							fill="#fff"
							padding={{ top: 18, right: 0, bottom: 0, left: 26 }}>
							<Text
								fontSize={24}
								horizontalAlignText={"left"}
								fill={layoutColors[pageType] || "#000000"}>
								{pageTypeOptions.find((f) => f.option === pageType).label}
							</Text>
						</AutoLayout>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 6, right: 0, bottom: 0, left: 26 }}>
						<Input // Title
							value={title}
							placeholder="Page Title"
							onTextEditEnd={(e) => {
								setTitle(e.characters);
							}}
							fontSize={40}
							letterSpacing={-0.4}
							lineHeight={54}
							fill={colourDarkGrey}
							width={346}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>
					<AutoLayout
						fill="#fff"
						padding={{ top: 22, right: 0, bottom: 29, left: 26 }}>
						<Input // Set Location
							value={location}
							placeholder="/"
							onTextEditEnd={(e) => {
								setLocation(e.characters);
							}}
							fontSize={24}
							letterSpacing={-0.4}
							fill={colourGrey}
							width={346}
							inputFrameProps={{
								fill: "#fff",
							}}
							inputBehavior="wrap"
						/>
					</AutoLayout>

					{/* <AutoLayout width={515} fill="#f3f3f3"></AutoLayout> */}
				</>
			)}

			{pageType === "connector" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
						height={187}
						width={112}></AutoLayout>
				</>
			)}

			{pageType === "spacer" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
						height={94}
						width={94}
						fill="#FF63A580"></AutoLayout>
				</>
			)}
		</AutoLayout>
	);
}

widget.register(PropertyMenuWidget);
