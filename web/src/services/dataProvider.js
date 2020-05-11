export function getRecommendations() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                designers: [
                    {
                        name: 'Miles',
                        avatar: ''
                    },
                    {
                        name: 'Luther',
                        avatar: ''
                    },
                    {
                        name: 'Pence',
                        avatar: ''
                    },
                    {
                        name: 'Ivanka',
                        avatar: ''
                    },
                    {
                        name: 'Trump',
                        avatar: ''
                    }
                ],
                products: [
                    {
                        name: 'Ladymay',
                        isFeatured: true
                    },
                    {
                        name: 'Burioni',
                        isFeatured: false
                    },
                    {
                        name: 'BMW 760 special',
                        isFeatured: false
                    },
                    {
                        name: 'S650 special',
                        isFeatured: false
                    },
                    {
                        name: 'Cigar $5000',
                        isFeatured: false
                    }
                ],
                brands: [
                    {
                        name: 'HERMES'
                    },
                    {
                        name: 'LV'
                    },
                    {
                        name: 'GUCCI'
                    },
                    {
                        name:  'ARMANI'
                    }
                ]
            })
        }, 2000);
    })
}