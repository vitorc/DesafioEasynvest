export {};
const { I } = inject();

Feature('Validar Endpoint Planets da API Starwars');

Scenario('Validando Status 200 do Endpoint Planets', async () => {
	const res = await I.sendGetRequest('/api/planets/1/');
	await I.assertEqual(res.status, 200);
});

Scenario('Validando campo Nome do Endpoint Planets', async () => {
	const res = await I.sendGetRequest('/api/planets/1/');
	await I.assertEqual(res.data.name, "Tatooine");
});

Scenario('Validando Status 404 do Endpoint Planets', async () => {
	const res = await I.sendGetRequest('/api/planets/123123');
	await I.assertEqual(res.status, 404);
});