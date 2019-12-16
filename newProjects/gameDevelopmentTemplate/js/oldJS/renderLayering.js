var renderLayers = function () {

	if (entity1RenderBehind) {
		entityEntity();
		playerEntity();
		bulletEntity();
		
	};

	if (!entity1RenderBehind) {
		playerEntity();
		entityEntity();
		bulletEntity();
	}

	
	targetEntity();
	entity2Entity();


};