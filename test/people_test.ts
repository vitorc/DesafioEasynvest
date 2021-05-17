export {};
const { I } = inject();

Feature('Validate Starwars People Endpoint');

Scenario('Validate People Endpoint Status', async () => {
	const res = await I.sendGetRequest('/api/people/1/');
	await I.assertEqual(res.status, 200);
});

Scenario('Validate People Name', async () => {
	const res = await I.sendGetRequest('/api/people/1/');
	await I.assertEqual(res.data.name, "Luke Skywalker");
});