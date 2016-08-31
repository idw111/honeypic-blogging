
function createMaterials() {
	var targets = {
		age: ['20대', '30대', '40대', '50대 이상'],
		// gender: ['남성', '여성']
	};
	var environments = {
		// calendar: ['추설', '설', '크리스마스', '발렌타인데이', '블랙데이', '어린이날', '어버이날', '스승의날'],
		place: ['서울', '제주', '파리', '런던', '라스베가스', '로스앤젤레스', '뉴욕'],
		weather: ['맑음', '흐림', '비', '눈', '천둥/번개', '거센바람']
	};
	var events = {
		type: ['결혼식', '허니문', '프리웨딩', '커플여행', '혼자여행', '우정스냅'],
		message: ['충격과 공포', '사랑과 행복']
	};
	var groups = [targets, environments, events];
	var materials = [];
	groups.forEach(group => {
		Object.keys(group).map(key => group[key]).forEach(features => {
			var index = Math.floor(Math.random() * features.length);
			materials.push(features[index]);
		});
	});
	return materials;
}

$(document).ready(function() {
	$('#create-materials').click(e => {
		var materials = createMaterials();
		console.log(materials);
		$('#materials').html('');
		materials.forEach(material => {
			$('#materials').append(`<li><span>${material}</span></li>`)
		})
	});
});
