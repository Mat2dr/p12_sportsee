const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Maurice',
            lastName: 'Mocked',
            age: 26,
        },
        todayScore: 0.72,
        keyData: {
            calorieCount: 2230,
            proteinCount: 305,
            carbohydrateCount: 390,
            lipidCount: 30
        },
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Chloé',
            lastName: 'Nocked',
            age: 21,
        },
        todayScore: 0.5,
        keyData: {
            calorieCount: 1870,
            proteinCount: 20,
            carbohydrateCount: 200,
            lipidCount: 100
        },
    },
]

const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 120,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 115,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 110,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 105,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 100,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 102,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 98,
                calories: 170
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 75,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 60,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]


const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 33
            },
            {
                day: 3,
                sessionLength: 40
            },
            {
                day: 4,
                sessionLength: 45
            },
            {
                day: 5,
                sessionLength: 50
            },
            {
                day: 6,
                sessionLength: 60
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 50
            },
            {
                day: 6,
                sessionLength: 20
            },
            {
                day: 7,
                sessionLength: 10
            }
        ]
    }
]


const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 100,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 100,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 100,
                kind: 1
            },
            {
                value: 140,
                kind: 2
            },
            {
                value: 180,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 20,
                kind: 5
            },
            {
                value: 10,
                kind: 6
            }
        ]
    }
]



module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
}
