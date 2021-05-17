const { I } = inject();

Feature('Validate Starwars Planets Endpoint');

Scenario('Validate Planets Endpoint Status', async () => {
	const res = await I.sendGetRequest('/api/planets/1/');
	await I.assertEqual(res.status, 200);
});

Scenario('Validate Planets Name', async () => {
	const res = await I.sendGetRequest('/api/planets/1/');
	await I.assertEqual(res.data.name, "Tatooine");
});