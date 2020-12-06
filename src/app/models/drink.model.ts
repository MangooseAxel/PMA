export interface Ingredient {
    name: string;
    measure?: string;
}

export interface Drink {
    idDrink?: string;
    strDrink?: string;
    strDrinkAlternate?: string;
    strDrinkES?: string;
    strDrinkDE?: string;
    strDrinkFR?: string;
    'strDrinkZH-HANS'?: string;
    'strDrinkZH-HANT'?: string;
    strTags?: string;
    strVideo?: string;
    strCategory?: string;
    strIBA?: string;
    strAlcoholic?: string;
    strGlass?: string;
    strInstructions?: string;
    strInstructionsES?: string;
    strInstructionsDE?: string;
    strInstructionsFR?: string;
    'strInstructionsZH-HANS'?: string;
    'strInstructionsZH-HANT'?: string;
    strDrinkThumb?: string;
    strIngredients?: Ingredient[];
    strCreativeCommonsConfirmed?: string;
    dateModified?: string;
}

export const drinksMockup: Drink[] = [
    {
        idDrink: '11000',
        strDrink: 'Mojito',
        strTags: 'IBA,ContemporaryClassic,Alcoholic,USA',
        strCategory: 'Cocktail',
        strIBA: 'Contemporary Classics',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Highball glass',
        strInstructions: 'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
        strInstructionsDE: 'Minzbl\u00e4tter mit Zucker und Limettensaft verr\u00fchren. F\u00fcge einen Spritzer Sodawasser hinzu und f\u00fclle das Glas mit gebrochenem Eis. Den Rum eingie\u00dfen und mit Sodawasser \u00fcbergie\u00dfen. Garnieren und mit einem Strohhalm servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3z6xdi1589574603.jpg',
        strIngredients: [
            {name: 'Light rum', measure: '2-3 oz '},
            {name: 'Lime', measure: 'Juice of 1 '},
            {name: 'Sugar', measure: '2 tsp '},
            {name: 'Mint', measure: '2-4 '},
            {name: 'Soda water', measure: ''},
        ],
        // strIngredient1: 'Light rum',
        // strIngredient2: 'Lime',
        // strIngredient3: 'Sugar',
        // strIngredient4: 'Mint',
        // strIngredient5: 'Soda water',
        // strMeasure1: '2-3 oz ',
        // strMeasure2: 'Juice of 1 ',
        // strMeasure3: '2 tsp ',
        // strMeasure4: '2-4 ',
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2016-11-04 09:17:09'
    }, {
        idDrink: '11001',
        strDrink: 'Old Fashioned',
        strTags: 'IBA,Classic,Alcoholic,Expensive',
        strVideo: 'https:\/\/www.youtube.com\/watch?v=YsE_igrPXZs',
        strCategory: 'Cocktail',
        strIBA: 'Unforgettables',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Old-fashioned glass',
        strInstructions: 'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.',
        strInstructionsDE: 'Zuckerw\u00fcrfel in ein old fashioned Glas geben und mit Bitterstoff s\u00e4ttigen, einen Schuss Wasser hinzuf\u00fcgen. Vermischen, bis sie sich aufl\u00f6sen.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vrwquq1478252802.jpg',
        strIngredients: [
            {name: 'Bourbon', measure: '4.5 cL'},
            {name: 'Angostura bitters', measure: '2 dashes'},
            {name: 'Sugar', measure: '1 cube'},
            {name: 'Water', measure: 'dash'},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2016-11-04 09:46:42'
    }, {
        idDrink: '11002',
        strDrink: 'Long Island Tea',
        strTags: 'Strong,Asia,StrongFlavor,Brunch,Vegetarian',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Highball glass',
        strInstructions: 'Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.',
        strInstructionsDE: 'Alle Zutaten (au\u00dfer Cola) mischen und in einem Highball-Glas \u00fcber Eis gie\u00dfen. F\u00fcge einen Spritzer Cola hinzu, um Farbe zu erhalten. Mit einer Scheibe Zitrone dekorieren und servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tppn6i1589574695.jpg',
        strIngredients: [
            {name: 'Vodka', measure: '1\/2 oz '},
            {name: 'Light rum', measure: '1\/2 oz '},
            {name: 'Gin', measure: '1\/2 oz '},
            {name: 'Tequila', measure: '1\/2 oz '},
            {name: 'Lemon', measure: 'Juice of 1\/2 '},
            {name: 'Coca-Cola', measure: '1 splash '},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2015-08-18 14:54:32'
    }, {
        idDrink: '11003',
        strDrink: 'Negroni',
        strTags: 'IBA,Classic',
        strVideo: 'https:\/\/www.youtube.com\/watch?v=Y4LH0FQlU8Q',
        strCategory: 'Ordinary Drink',
        strIBA: 'Unforgettables',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Old-fashioned glass',
        strInstructions: 'Stir into glass over ice, garnish and serve.',
        strInstructionsDE: 'In ein Glas \u00fcber das Eis gie\u00dfen, garnieren und servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qgdu971561574065.jpg',
        strIngredients: [
            {name: 'Gin', measure: '1 oz '},
            {name: 'Campari', measure: '1 oz '},
            {name: 'Sweet Vermouth', measure: '1 oz '},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2015-08-18 15:12:07'
    }, {
        idDrink: '11004',
        strDrink: 'Whiskey Sour',
        strTags: 'IBA,Classic,Alcoholic',
        strVideo: 'https:\/\/www.youtube.com\/watch?v=hFKZPzfngcU',
        strCategory: 'Ordinary Drink',
        strIBA: 'Unforgettables',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Old-fashioned glass',
        strInstructions: 'Shake with ice. Strain into chilled glass, garnish and serve. If served \'On the rocks\', strain ingredients into old-fashioned glass filled with ice.',
        strInstructionsDE: 'Mit Eis sch\u00fctteln. In ein gek\u00fchltes Glas abseihen, garnieren und servieren. Wenn Sie "On the rocks" servieren, die Zutaten in ein old-fashioned, mit Eis gef\u00fclltes Glas geben.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/hbkfsh1589574990.jpg',
        strIngredients: [
            {name: 'Blended whiskey', measure: '2 oz '},
            {name: 'Lemon', measure: 'Juice of 1\/2 '},
            {name: 'Powdered sugar', measure: '1\/2 tsp '},
            {name: 'Cherry', measure: '1 '},
            {name: 'Lemon', measure: '1\/2 slice '},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2017-09-02 12:45:25'
    }, {
        idDrink: '11005',
        strDrink: 'Dry Martini',
        strTags: 'IBA,Classic',
        strCategory: 'Cocktail',
        strIBA: 'Unforgettables',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/6ck9yi1589574317.jpg',
        strIngredients: [
            {name: 'Gin', measure: '1 2\/3 oz '},
            {name: 'Dry Vermouth', measure: '1\/3 oz '},
            {name: 'Olive', measure: '1 '},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2017-09-02 12:51:35'
    },
    {
        idDrink: '11006',
        strDrink: 'Daiquiri',
        strTags: 'IBA,Classic,Beach',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
        strInstructionsDE: 'Alle Zutaten in den Shaker mit Eisw\u00fcrfel geben. Gut sch\u00fctteln. In einem gek\u00fchlten Cocktailglas abseihen.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/mrz9091589574515.jpg',
        strIngredients: [
            {name: 'Light rum', measure: '1 1\/2 oz '},
            {name: 'Lime', measure: 'Juice of 1\/2 '},
            {name: 'Sugar', measure: '1 tsp '},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2015-08-18 15:06:37'
    }, {
        idDrink: '11007',
        strDrink: 'Margarita',
        strTags: 'IBA,ContemporaryClassic',
        strCategory: 'Ordinary Drink',
        strIBA: 'Contemporary Classics',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
        strInstructionsDE: 'Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der \u00e4u\u00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genie\u00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis sch\u00fctteln und vorsichtig in das Glas geben.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg',
        strIngredients: [
            {name: 'Tequila', measure: '1 1\/2 oz '},
            {name: 'Triple sec', measure: '1\/2 oz '},
            {name: 'Lime juice', measure: '1 oz '},
            {name: 'Salt', measure: ''},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2015-08-18 14:42:59'
    }, {
        idDrink: '11008',
        strDrink: 'Manhattan',
        strTags: 'IBA,Classic',
        strVideo: 'https:\/\/www.youtube.com\/watch?v=TFWPtkNoF4Y',
        strCategory: 'Cocktail',
        strIBA: 'Unforgettables',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Stirred over ice, strained into a chilled glass, garnished, and served up.',
        strInstructionsDE: '\u00dcber Eis ger\u00fchrt, in ein gek\u00fchltes Glas geseiht, garniert und serviert.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/hz7p4t1589575281.jpg',
        strIngredients: [
            {name: 'Sweet Vermouth', measure: '3\/4 oz '},
            {name: 'Bourbon', measure: '2 1\/2 oz Blended '},
            {name: 'Angostura bitters', measure: 'dash '},
            {name: 'Ice', measure: '2 or 3 '},
            {name: 'Maraschino cherry', measure: '1 '},
            {name: 'Orange peel', measure: '1 twist of '},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2017-09-02 12:07:09'
    }, {
        idDrink: '11009',
        strDrink: 'Moscow Mule',
        strTags: 'IBA,ContemporaryClassic',
        strCategory: 'Punch \/ Party Drink',
        strIBA: 'Contemporary Classics',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Copper Mug',
        strInstructions: 'Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.',
        strInstructionsDE: 'Mischen Sie Wodka und Ingwerbier in einem mit Eis gef\u00fcllten Highball-Glas. Limettensaft hinzuf\u00fcgen. Vorsichtig umr\u00fchren. Garnieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3pylqc1504370988.jpg',
        strIngredients: [
            {name: 'Vodka', measure: '2 oz '},
            {name: 'Lime juice', measure: '2 oz '},
            {name: 'Ginger ale', measure: '8 oz '},
        ],
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2017-09-02 17:49:48'
    }, {
        idDrink: '11010',
        strDrink: 'After Dinner Cocktail',
        strTags: 'DinnerParty',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.',
        strInstructionsDE: 'Alle Zutaten (au\u00dfer Limettenkeil) mit Eis sch\u00fctteln und in ein Cocktailglas abseihen. Den Limettenkeil dazugeben und servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vtytxq1483387578.jpg',
        strIngredients: [
            {name: 'Apricot brandy', measure: '1 oz '},
            {name: 'Triple sec', measure: '1 oz '},
            {name: 'Lime', measure: 'Juice of 1 '},
            {name: 'Lime', measure: '1 '},
        ],
        strCreativeCommonsConfirmed: 'No',
        dateModified: '2017-01-02 20:06:18'
    }, {
        idDrink: '11011',
        strDrink: 'After Supper Cocktail',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Shake all ingredients with ice, strain into a cocktail glass, and serve.',
        strInstructionsDE: 'Alle Zutaten mit Eis sch\u00fctteln, in ein Cocktailglas abseihen und servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/quyxwu1483387610.jpg',
        strIngredients: [
            {name: 'Triple sec', measure: '1 oz '},
            {name: 'Apricot brandy', measure: '1 oz '},
            {name: 'Lemon juice', measure: '1\/2 tsp '},
        ],
        strCreativeCommonsConfirmed: 'No',
        dateModified: '2017-01-02 20:06:50'
    }, {
        idDrink: '11012',
        strDrink: 'Alabama Slammer',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Highball glass',
        strInstructions: 'Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.',
        strInstructionsDE: 'Alle Zutaten (au\u00dfer Zitronensaft) in einem Highball-Glas \u00fcber Eis gie\u00dfen. Umr\u00fchren, einen Schuss Zitronensaft hinzuf\u00fcgen und servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qtwxwr1483387647.jpg',
        strIngredients: [
            {name: 'Southern Comfort', measure: '1 oz '},
            {name: 'Amaretto', measure: '1 oz '},
            {name: 'Sloe gin', measure: '1\/2 tsp '},
            {name: 'Lemon juice', measure: '1 dash '},
        ],
        strCreativeCommonsConfirmed: 'No',
        dateModified: '2017-01-02 20:07:27'
    }, {
        idDrink: '11013',
        strDrink: 'Alaska Cocktail',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.',
        strInstructionsDE: 'Alle Zutaten mit Eis verr\u00fchren, Inhalt in ein Cocktailglas abseihen. Einen Spritzer Zitrone dazugeben und servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wsyryt1483387720.jpg',
        strIngredients: [
            {name: 'Orange bitters', measure: '2 dashes '},
            {name: 'Gin', measure: '1 1\/2 oz '},
            {name: 'Yellow Chartreuse', measure: '3\/4 oz '},
            {name: 'Lemon peel', measure: 'Twist of '},
        ],
        strCreativeCommonsConfirmed: 'No',
        dateModified: '2017-01-02 20:08:40'
    }
];

export const VodkaDrinksMockup = {
    drinks: [
        {
            strDrink: '\'57 Chevy with a White License Plate',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg',
            idDrink: '14029'
        },
        {
            strDrink: '155 Belmont',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg',
            idDrink: '15346'
        },
        {
            strDrink: '3-Mile Long Island Iced Tea',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
            idDrink: '15300'
        },
        {
            strDrink: '501 Blue',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg',
            idDrink: '17105'
        },
        {
            strDrink: '747 Drink',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg',
            idDrink: '178318'
        },
        {
            strDrink: 'A Gilligan\'s Island',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg',
            idDrink: '16943'
        },
        {
            strDrink: 'A midsummernight dream',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg',
            idDrink: '15675'
        },
        {
            strDrink: 'A.D.M. (After Dinner Mint)',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg',
            idDrink: '14560'
        },
        {
            strDrink: 'Absinthe #2',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg',
            idDrink: '12790'
        },
        {
            strDrink: 'Absolutely Fabulous',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg',
            idDrink: '17224'
        },
        {
            strDrink: 'Adam Bomb',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg',
            idDrink: '16333'
        },
        {
            strDrink: 'Adam Sunrise',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg',
            idDrink: '15567'
        },
        {
            strDrink: 'Addison Special',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg',
            idDrink: '14272'
        },
        {
            strDrink: 'After sex',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg',
            idDrink: '15182'
        },
        {
            strDrink: 'Apricot punch',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg',
            idDrink: '15849'
        },
        {
            strDrink: 'Arctic Fish',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg',
            idDrink: '14622'
        },
        {
            strDrink: 'Arizona Antifreeze',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg',
            idDrink: '16354'
        },
        {
            strDrink: 'Arizona Twister',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg',
            idDrink: '17074'
        },
        {
            strDrink: 'Army special',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg',
            idDrink: '17066'
        },
        {
            strDrink: 'Atlantic Sun',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg',
            idDrink: '13423'
        },
        {
            strDrink: 'Atomic Lokade',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg',
            idDrink: '13086'
        },
        {
            strDrink: 'Autodafé',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg',
            idDrink: '12756'
        },
        {
            strDrink: 'Avalon',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg',
            idDrink: '15266'
        },
        {
            strDrink: 'Aztec Punch',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg',
            idDrink: '14364'
        },
        {
            strDrink: 'Belgian Blue',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/jylbrq1582580066.jpg',
            idDrink: '14071'
        },
        {
            strDrink: 'Bellini Martini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg',
            idDrink: '16176'
        },
        {
            strDrink: 'Black Forest Shake',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg',
            idDrink: '15951'
        },
        {
            strDrink: 'Black Russian',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/8oxlqf1606772765.jpg',
            idDrink: '11102'
        },
        {
            strDrink: 'Bloody Mary',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg',
            idDrink: '11113'
        },
        {
            strDrink: 'Bloody Punch',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5yhd3n1571687385.jpg',
            idDrink: '178312'
        },
        {
            strDrink: 'Blue Lagoon',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5wm4zo1582579154.jpg',
            idDrink: '11117'
        },
        {
            strDrink: 'Blue Mountain',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/bih7ln1582485506.jpg',
            idDrink: '11119'
        },
        {
            strDrink: 'Brain Fart',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg',
            idDrink: '17120'
        },
        {
            strDrink: 'Bruised Heart',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg',
            idDrink: '16998'
        },
        {
            strDrink: 'Bubble Gum',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg',
            idDrink: '14730'
        },
        {
            strDrink: 'Butter Baby',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/1xhjk91504783763.jpg',
            idDrink: '17220'
        },
        {
            strDrink: 'Caribbean Orange Liqueur',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg',
            idDrink: '12796'
        },
        {
            strDrink: 'Cherry Electric Lemonade',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg',
            idDrink: '17174'
        },
        {
            strDrink: 'Chocolate Black Russian',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg',
            idDrink: '11243'
        },
        {
            strDrink: 'Coffee Liqueur',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ryvtsu1441253851.jpg',
            idDrink: '12798'
        },
        {
            strDrink: 'Coffee-Vodka',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qvrrvu1472667494.jpg',
            idDrink: '12800'
        },
        {
            strDrink: 'Cosmopolitan Martini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg',
            idDrink: '14133'
        },
        {
            strDrink: 'Dirty Martini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg',
            idDrink: '17181'
        },
        {
            strDrink: 'Espresso Martini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg',
            idDrink: '17212'
        },
        {
            strDrink: 'Figgy Thyme',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/pbw4e51606766578.jpg',
            idDrink: '178344'
        },
        {
            strDrink: 'Flaming Dr. Pepper',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg',
            idDrink: '13202'
        },
        {
            strDrink: 'Freddy Kruger',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg',
            idDrink: '14688'
        },
        {
            strDrink: 'French Martini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg',
            idDrink: '17213'
        },
        {
            strDrink: 'Gideon\'s Green Dinosaur',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/p5r0tr1503564636.jpg',
            idDrink: '17002'
        },
        {
            strDrink: 'Godchild',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg',
            idDrink: '11422'
        },
        {
            strDrink: 'Godmother',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/quksqg1582582597.jpg',
            idDrink: '11424'
        },
        {
            strDrink: 'Greyhound',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/g5upn41513706732.jpg',
            idDrink: '17252'
        },
        {
            strDrink: 'Halloween Punch',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7hcgyj1571687671.jpg',
            idDrink: '178313'
        },
        {
            strDrink: 'Harvey Wallbanger',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7os4gs1606854357.jpg',
            idDrink: '11462'
        },
        {
            strDrink: 'Homemade Kahlua',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/uwtsst1441254025.jpg',
            idDrink: '17044'
        },
        {
            strDrink: 'Ice Pick #1',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ypsrqp1469091726.jpg',
            idDrink: '13539'
        },
        {
            strDrink: 'Irish Curdling Cow',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yrhutv1503563730.jpg',
            idDrink: '16987'
        },
        {
            strDrink: 'Irish Russian',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/swqurw1454512730.jpg',
            idDrink: '17015'
        },
        {
            strDrink: 'Jello shots',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/l0smzo1504884904.jpg',
            idDrink: '14956'
        },
        {
            strDrink: 'Jitterbug',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg',
            idDrink: '16178'
        },
        {
            strDrink: 'Kamikaze',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/d7ff7u1606855412.jpg',
            idDrink: '11600'
        },
        {
            strDrink: 'Kool-Aid Shot',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/fegm621503564966.jpg',
            idDrink: '13190'
        },
        {
            strDrink: 'Kool-Aid Slammer',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg',
            idDrink: '14446'
        },
        {
            strDrink: 'Long Island Iced Tea',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg',
            idDrink: '17204'
        },
        {
            strDrink: 'Long Island Tea',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg',
            idDrink: '11002'
        },
        {
            strDrink: 'Long vodka',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
            idDrink: '13196'
        },
        {
            strDrink: 'Moscow Mule',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg',
            idDrink: '11009'
        },
        {
            strDrink: 'National Aquarium',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg',
            idDrink: '13192'
        },
        {
            strDrink: 'Orange Crush',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg',
            idDrink: '15330'
        },
        {
            strDrink: 'Orange Whip',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg',
            idDrink: '16995'
        },
        {
            strDrink: 'Oreo Mudslide',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/tpwwut1468925017.jpg',
            idDrink: '13499'
        },
        {
            strDrink: 'Orgasm',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg',
            idDrink: '11872'
        },
        {
            strDrink: 'Passion Fruit Martini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/6trfve1582473527.jpg',
            idDrink: '178323'
        },
        {
            strDrink: 'Pink Panty Pulldowns',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg',
            idDrink: '13535'
        },
        {
            strDrink: 'Pink Penocha',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/6vigjx1503564007.jpg',
            idDrink: '16992'
        },
        {
            strDrink: 'Popped cherry',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/sxvrwv1473344825.jpg',
            idDrink: '13072'
        },
        {
            strDrink: 'Radioactive Long Island Iced Tea',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg',
            idDrink: '16984'
        },
        {
            strDrink: 'Russian Spring Punch',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ctt20s1504373488.jpg',
            idDrink: '17214'
        },
        {
            strDrink: 'San Francisco',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg',
            idDrink: '15184'
        },
        {
            strDrink: 'Screaming Orgasm',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/x894cs1504388670.jpg',
            idDrink: '13625'
        },
        {
            strDrink: 'Screwdriver',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg',
            idDrink: '12162'
        },
        {
            strDrink: 'Sea breeze',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg',
            idDrink: '13377'
        },
        {
            strDrink: 'Sex on the Beach',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/lijtw51551455287.jpg',
            idDrink: '12754'
        },
        {
            strDrink: 'Shark Attack',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg',
            idDrink: '16273'
        },
        {
            strDrink: 'Vesper',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg',
            idDrink: '17218'
        },
        {
            strDrink: 'Victory Collins',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg',
            idDrink: '12452'
        },
        {
            strDrink: 'Vodka And Tonic',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg',
            idDrink: '12460'
        },
        {
            strDrink: 'Vodka Fizz',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg',
            idDrink: '16967'
        },
        {
            strDrink: 'Vodka Martini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg',
            idDrink: '14167'
        },
        {
            strDrink: 'Vodka Russian',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rpttur1454515129.jpg',
            idDrink: '15403'
        },
        {
            strDrink: 'White Russian',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg',
            idDrink: '12528'
        },
        {
            strDrink: 'Zipperhead',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/r2qzhu1485620235.jpg',
            idDrink: '16942'
        },
        {
            strDrink: 'Zorbatini',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wtkqgb1485621155.jpg',
            idDrink: '16963'
        }
    ]
};

export const DaiquiriMockup = {
    drinks: [
        {
            idDrink: '11006',
            strDrink: 'Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: 'IBA,Classic,Beach',
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail glass',
            strInstructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten in den Shaker mit Eiswürfel geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg',
            strIngredients: [
                {name: 'Light rum', measure: '1 1/2 oz '},
                {name: 'Lime', measure: 'Juice of 1/2 '},
                {name: 'Powdered sugar', measure: '1 tsp '}
            ],
            strImageSource: 'https://commons.wikimedia.org/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg',
            strImageAttribution: 'Will Shenton',
            strCreativeCommonsConfirmed: 'Yes',
            dateModified: '2015-08-18 15:06:37'
        },
        {
            idDrink: '11064',
            strDrink: 'Banana Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: 'Fruity',
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Champagne flute',
            strInstructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten in den Shaker mit Eiswürfeln geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg',
            strIngredients: [
                {name: 'Light rum', measure: '1 1/2 oz '},
                {name: 'Triple sec', measure: '1 tblsp '},
                {name: 'Banana', measure: '1 '},
                {name: 'Lime juice', measure: '1 1/2 oz '},
                {name: 'Sugar', measure: '1 tsp '},
                {name: 'Cherry', measure: '1 '},
            ],
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-02 22:55:01'
        },
        {
            idDrink: '11387',
            strDrink: 'Frozen Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Champagne flute',
            strInstructions: 'Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten (außer der Kirsche) in einem Elektromixer für fünf Sekunden bei niedriger Geschwindigkeit, dann bei hoher Geschwindigkeit bis zum festen Stand mischen. Den Inhalt in ein Champagner Glas geben, mit der Kirsche verzieren und servieren.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7oyrj91504884412.jpg',
            strIngredients: [
                {name: 'Light rum', measure: '1 1/2 oz '},
                {name: 'Triple sec', measure: '1 tblsp '},
                {name: 'Lime juice', measure: '1 1/2 oz '},
                {name: 'Sugar', measure: '1 tsp '},
                {name: 'Cherry', measure: '1 '},
                {name: 'Ice', measure: '1 cup crushed '},
            ],
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-08 16:26:53'
        },
        {
            idDrink: '12316',
            strDrink: 'Strawberry Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail glass',
            strInstructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten in den Shaker mit Eiswürfeln geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg',
            strIngredients: [
                {name: 'Strawberry schnapps', measure: '1/2 oz '},
                {name: 'Light rum', measure: '1 oz '},
                {name: 'Lime juice', measure: '1 oz '},
                {name: 'Powdered sugar', measure: '1 tsp '},
                {name: 'Strawberries', measure: '1 oz '},
            ],
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-06 23:15:36'
        },
        {
            idDrink: '11390',
            strDrink: 'Frozen Mint Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Old-fashioned glass',
            strInstructions: 'Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten mit 1 Tasse Crushed Ice in einem Elektromixer bei niedriger Geschwindigkeit für kurze Zeit mischen. In ein old-fashioned Glas geben und servieren.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg',
            strIngredients: [
                {name: 'Light rum', measure: '2 oz '},
                {name: 'Lime juice', measure: '1 tblsp '},
                {name: 'Mint', measure: '6 '},
                {name: 'Sugar', measure: '1 tsp '},
            ],
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-08 16:27:49'
        },
        {
            idDrink: '11391',
            strDrink: 'Frozen Pineapple Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail Glass',
            strInstructions: 'Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a cocktail glass and serve.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten mit 1 Tasse Crushed Ice in einem Elektromixer bei niedriger Geschwindigkeit für kurze Zeit mischen. In ein Champagner Glas geben und servieren.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/k3aecd1582481679.jpg',
            strIngredients: [
                {name: 'Light rum', measure: '1 1/2 oz '},
                {name: 'Pineapple', measure: '4 chunks '},
                {name: 'Lime juice', measure: '1 tblsp '},
                {name: 'Sugar', measure: '1/2 tsp '},
            ],
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'Yes',
            dateModified: '2017-09-06 23:14:57'
        },
        {
            idDrink: '12658',
            strDrink: 'Banana Strawberry Shake Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Milk / Float / Shake',
            strIBA: null,
            strAlcoholic: 'Non alcoholic',
            strGlass: 'Cocktail Glass',
            strInstructions: 'Blend all together in a blender until smooth.',
            strInstructionsES: null,
            strInstructionsDE: 'Alles zusammen in einem Mixer mischen, bis es geschmeidig ist.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg',
            strIngredients: [
                {name: 'Strawberries', measure: '1/2 lb frozen '},
                {name: 'Banana', measure: '1 frozen '},
                {name: 'Apple juice', measure: '2 cups fresh '},
            ],
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2016-09-01 10:03:01'
        }
    ]
};

export const DaiquiriToModifyMockup = {
    drinks: [
        {
            idDrink: '11006',
            strDrink: 'Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: 'IBA,Classic,Beach',
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail glass',
            strInstructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten in den Shaker mit Eiswürfel geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg',
            strIngredient1: 'Light rum',
            strIngredient2: 'Lime',
            strIngredient3: 'Powdered sugar',
            strIngredient4: null,
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1 1/2 oz ',
            strMeasure2: 'Juice of 1/2 ',
            strMeasure3: '1 tsp ',
            strMeasure4: null,
            strMeasure5: null,
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: 'https://commons.wikimedia.org/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg',
            strImageAttribution: 'Will Shenton',
            strCreativeCommonsConfirmed: 'Yes',
            dateModified: '2015-08-18 15:06:37'
        },
        {
            idDrink: '11064',
            strDrink: 'Banana Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: 'Fruity',
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Champagne flute',
            strInstructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten in den Shaker mit Eiswürfeln geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg',
            strIngredient1: 'Light rum',
            strIngredient2: 'Triple sec',
            strIngredient3: 'Banana',
            strIngredient4: 'Lime juice',
            strIngredient5: 'Sugar',
            strIngredient6: 'Cherry',
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1 1/2 oz ',
            strMeasure2: '1 tblsp ',
            strMeasure3: '1 ',
            strMeasure4: '1 1/2 oz ',
            strMeasure5: '1 tsp ',
            strMeasure6: '1 ',
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-02 22:55:01'
        },
        {
            idDrink: '11387',
            strDrink: 'Frozen Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Champagne flute',
            strInstructions: 'Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten (außer der Kirsche) in einem Elektromixer für fünf Sekunden bei niedriger Geschwindigkeit, dann bei hoher Geschwindigkeit bis zum festen Stand mischen. Den Inhalt in ein Champagner Glas geben, mit der Kirsche verzieren und servieren.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7oyrj91504884412.jpg',
            strIngredient1: 'Light rum',
            strIngredient2: 'Triple sec',
            strIngredient3: 'Lime juice',
            strIngredient4: 'Sugar',
            strIngredient5: 'Cherry',
            strIngredient6: 'Ice',
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1 1/2 oz ',
            strMeasure2: '1 tblsp ',
            strMeasure3: '1 1/2 oz ',
            strMeasure4: '1 tsp ',
            strMeasure5: '1 ',
            strMeasure6: '1 cup crushed ',
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-08 16:26:53'
        },
        {
            idDrink: '12316',
            strDrink: 'Strawberry Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail glass',
            strInstructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten in den Shaker mit Eiswürfeln geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg',
            strIngredient1: 'Strawberry schnapps',
            strIngredient2: 'Light rum',
            strIngredient3: 'Lime juice',
            strIngredient4: 'Powdered sugar',
            strIngredient5: 'Strawberries',
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1/2 oz ',
            strMeasure2: '1 oz ',
            strMeasure3: '1 oz ',
            strMeasure4: '1 tsp ',
            strMeasure5: '1 oz ',
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-06 23:15:36'
        },
        {
            idDrink: '11390',
            strDrink: 'Frozen Mint Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Old-fashioned glass',
            strInstructions: 'Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten mit 1 Tasse Crushed Ice in einem Elektromixer bei niedriger Geschwindigkeit für kurze Zeit mischen. In ein old-fashioned Glas geben und servieren.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg',
            strIngredient1: 'Light rum',
            strIngredient2: 'Lime juice',
            strIngredient3: 'Mint',
            strIngredient4: 'Sugar',
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '2 oz ',
            strMeasure2: '1 tblsp ',
            strMeasure3: '6 ',
            strMeasure4: '1 tsp ',
            strMeasure5: null,
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2017-09-08 16:27:49'
        },
        {
            idDrink: '11391',
            strDrink: 'Frozen Pineapple Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Ordinary Drink',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail Glass',
            strInstructions: 'Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a cocktail glass and serve.',
            strInstructionsES: null,
            strInstructionsDE: 'Alle Zutaten mit 1 Tasse Crushed Ice in einem Elektromixer bei niedriger Geschwindigkeit für kurze Zeit mischen. In ein Champagner Glas geben und servieren.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/k3aecd1582481679.jpg',
            strIngredient1: 'Light rum',
            strIngredient2: 'Pineapple',
            strIngredient3: 'Lime juice',
            strIngredient4: 'Sugar',
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1 1/2 oz ',
            strMeasure2: '4 chunks ',
            strMeasure3: '1 tblsp ',
            strMeasure4: '1/2 tsp ',
            strMeasure5: null,
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'Yes',
            dateModified: '2017-09-06 23:14:57'
        },
        {
            idDrink: '12658',
            strDrink: 'Banana Strawberry Shake Daiquiri',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Milk / Float / Shake',
            strIBA: null,
            strAlcoholic: 'Non alcoholic',
            strGlass: 'Cocktail Glass',
            strInstructions: 'Blend all together in a blender until smooth.',
            strInstructionsES: null,
            strInstructionsDE: 'Alles zusammen in einem Mixer mischen, bis es geschmeidig ist.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg',
            strIngredient1: 'Strawberries',
            strIngredient2: 'Banana',
            strIngredient3: 'Apple juice',
            strIngredient4: null,
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1/2 lb frozen ',
            strMeasure2: '1 frozen ',
            strMeasure3: '2 cups fresh ',
            strMeasure4: null,
            strMeasure5: null,
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2016-09-01 10:03:01'
        }
    ]
};

export const Belmont = {
    drinks: [
        {
            idDrink: '15346',
            strDrink: '155 Belmont',
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            'strDrinkZH-HANS': null,
            'strDrinkZH-HANT': null,
            strTags: null,
            strVideo: null,
            strCategory: 'Cocktail',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'White wine glass',
            strInstructions: 'Blend with ice. Serve in a wine glass. Garnish with carrot.',
            strInstructionsES: null,
            strInstructionsDE: 'Mit Eis vermischen. In einem Weinglas servieren. Mit Karotte garnieren.',
            strInstructionsFR: null,
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg',
            strIngredient1: 'Dark rum',
            strIngredient2: 'Light rum',
            strIngredient3: 'Vodka',
            strIngredient4: 'Orange juice',
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1 shot ',
            strMeasure2: '2 shots ',
            strMeasure3: '1 shot ',
            strMeasure4: '1 shot ',
            strMeasure5: null,
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2016-10-05 12:36:28'
        }
    ]
};
