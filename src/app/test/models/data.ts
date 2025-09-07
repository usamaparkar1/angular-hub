export class TestData implements ITestData {
    id: string;

    constructor(testData: ITestData) {
        this.id = testData.id;
    }
};

interface ITestData {
    id: string;
};