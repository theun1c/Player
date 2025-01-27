
class Program
{
    static async Task Main(string[] args)
    {
        HttpClient client = new HttpClient();

        HttpResponseMessage response = await client.GetAsync("http://api.anilibria.tv/v3/title?id=9000");

        Console.WriteLine(await response.Content.ReadAsStringAsync());

    }
}

