export const billListData = {
    pay: [
      {
        type: 'foods',
        name: 'Catering',
        list: [
          { type: 'food', name: 'Meal' },
          { type: 'drinks', name: 'Wine drinks' },
          { type: 'dessert', name: 'Dessert snacks' },
        ],
      },
      {
        type: 'taxi',
        name: 'Travel',
        list: [
          { type: 'taxi', name: 'Taxi rental' },
          { type: 'longdistance', name: 'Travel ticket' },
        ],
      },
      {
        type: 'recreation',
        name: 'Leisure and entertainment',
        list: [
          { type: 'bodybuilding', name: 'Sports and fitness' },
          { type: 'game', name: 'Casual fun' },
          { type: 'audio', name: 'Media Audio and Video' },
          { type: 'travel', name: 'Travel vacation' },
        ],
      },
      {
        type: 'daily',
        name: 'Daily expenses',
        list: [
          { type: 'clothes', name: 'Clothes' },
          { type: 'bag', name: 'Shoes, hats and bags' },
          { type: 'book', name: 'Knowledge learning' },
          { type: 'promote', name: 'Ability improvement' },
          { type: 'home', name: 'Home decoration' },
        ],
      },
      {
        type: 'other',
        name: 'Other expenses',
        list: [{ type: 'community', name: 'Community payment' }],
      },
    ],
    income: [
      {
        type: 'professional',
        name: 'Other expenses',
        list: [
          { type: 'salary', name: 'Salary' },
          { type: 'overtimepay', name: 'Overtime' },
          { type: 'bonus', name: 'Bonus' },
        ],
      },
      {
        type: 'other',
        name: 'Other income',
        list: [
          { type: 'financial', name: 'Financial management income' },
          { type: 'cashgift', name: 'Gift income' },
        ],
      },
    ],
 }
 
 export const billTypeToName = Object.keys(billListData).reduce((prev, key) => {
    billListData[key].forEach(bill => {
      bill.list.forEach(item => {
        prev[item.type] = item.name
      })
    })
    return prev
 }, {})