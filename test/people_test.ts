export {};
const { I } = inject();

Feature('Validar Endpoint People da API Starwars');

Scenario('Validando Status 200 do Endpoint People', async () => {
	const res = await I.sendGetRequest('/api/people/1/');
	await I.assertEqual(res.status, 200);
});

Scenario('Validando campo Nome do Endpoint People', async () => {
	const res = await I.sendGetRequest('/api/people/1/');
	await I.assertEqual(res.data.name, "Luke Skywalker");
});

Scenario('Validando Status 4004 do Endpoint People', async () => {
	const res = await I.sendGetRequest('/api/people/123123');
	await I.assertEqual(res.status, 404);
});