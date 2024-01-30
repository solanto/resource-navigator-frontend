module.exports = ({ eleventy: { serverless } }) => {
    const providers = [
        {
            name: "Location A",
            address: "123 Main St"
        },
        {
            name: "Location B",
            address: "456 Oak Rd"
        },
        {
            name: "Location C",
            address: "789 New Ave"
        }
    ].map((data, index) => ({ ...data, ordinal: index + 1 }))

    return {
        permalink: {
            serverless: "/flyer"
        },
        providerInfo: providers[serverless?.query?.location] ?? providers[0]
    }
}