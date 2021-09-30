import counter from "./counter";

describe("Counter store", () => {
    test("should be initialized with 0", () => {
        expect(counter.count).toBe(0);
    });

    test("should increment count", () => {
        counter.increment();

        expect(counter.count).toBe(1);
    });

    test("should decrement count", () => {
        expect(counter.count).toBe(1);

        counter.decrement();

        expect(counter.count).toBe(0);
    });
});
