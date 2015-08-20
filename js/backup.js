.to(p1, 0.5, {opacity: 1, ease:Sine.easeIn})
				.to(p1, 3, {scale: percentoScale(100), x: "-=" + percentToPixel_x(380), y: "+=" + percentToPixel_y(55), ease:Expo.easeIn})

				.to(p2, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p2,3, {scale: percentoScale(100), x: "+=" + percentToPixel_x(138.8), y: "-=" + percentToPixel_y(69.4), ease:Expo.easeIn}, "-=0.4")

				.to(p3, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p3,3, {scale: percentoScale(100), y: "+=" + percentToPixel_y(200), ease:Expo.easeIn}, "-=0.4")

				.to(p4, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p4,3, {scale: percentoScale(100), y: "-=" + percentToPixel_y(69.4), x:"-=" + percentToPixel_x(111), ease:Expo.easeIn}, "-=0.4")

				.to(p5, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p5,3, {scale: percentoScale(250), y: "+=" + percentToPixel_y(138.8), x:"+=" + percentToPixel_x(222.2),ease:Expo.easeIn}, "-=0.4")

				.to(p6, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p6,3, {scale: percentoScale(100), y: "-=" + percentToPixel_y(211.1), ease:Expo.easeIn}, "-=0.4")

				//Earth

				.to(p7, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p7,3, {scale: percentoScale(75), ease:Expo.easeIn}, "-=0.4")
				.to(p7, 1, {scale: percentoScale(150),rotation: "90deg", ease:Linear.easeNone}, "-=0.25")
				.add(rotateStars90())
				.add(rotateStarsNeg90())
				.add(animateStars())
				.to(p7, 1, {scale: percentoScale(175), y: "+=" + percentToPixel_y(250), ease:Linear.easeNone}, "-=0.25")
				.to(p7, 0.25, {x: "+=" + percentToPixel_x(100), scale: percentoScale(200), ease:Linear.easeNone})

				.to(p8, 0.5, {opacity: 1, ease:Sine.easeIn})
				.to(p8,3, {rotation: "-90deg", scale: percentoScale(100), x: "-=" + percentToPixel_x(110), ease:Expo.easeIn}, "-=0.4")

				.to(p9, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p9,3, {scale: percentoScale(150), y: "-=" + percentToPixel_y(150), x: "-=" + percentToPixel_x(122), ease:Expo.easeIn}, "-=0.4")

				.to(p10, 0.5, {opacity: 1, ease:Sine.easeIn}, "-=1.5")
				.to(p10,3, {scale: percentoScale(100), ease:Expo.easeIn}, "-=0.4")
				.to(p10, 0.5, {rotation: "90deg", x: "+=" + percentToPixel_x(13.8), scale: percentoScale(125), ease:Linear.easeNone})
				.to(p10, 1, {x: "+=" + percentToPixel_x(343.8), scale: percentoScale(1000), ease:Linear.easeNone}, "-=0.5");