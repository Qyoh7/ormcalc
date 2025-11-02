#include <cinttypes>
#include <iostream>
#include <vector>
using namespace std;

int roundUp(int numToRound, int multiple)
{
    if (multiple == 0)
        return numToRound;

    int remainder = numToRound % multiple;
    if (remainder == 0)
        return numToRound;

    return numToRound + multiple - remainder;
}

vector<double> determineWeights(double theweight)
{
    vector<double> sizes{55, 45, 35, 25, 10, 5};
    vector<double> weights;
    double weight = theweight;
    for (auto size : sizes)
    {
        while (weight / size >= 1)
        {
            weights.push_back(size);
            weight -= size;
        }
    }

    // push back remainder
    weights.push_back(weight);

    return weights;
}

int main()
{
    double orm;
    double percentage;
    double barWeight;

    cout << "Enter ORM" << endl;
    cin >> orm;
    cout << "Enter percentage" << endl;
    cin >> percentage;
    cout << "Enter bar weight" << endl;
    cin >> barWeight;

    double newWeight = (orm * (percentage / 100.0)) - barWeight;
    double oneSide = roundUp((newWeight - 45.0) / 2.0, 5);

    cout << "New weight: " << newWeight << endl;
    cout << endl;
    cout << "Weight on one side: " << oneSide << endl;
    cout << endl;

    vector<double> weights = determineWeights(oneSide);

    cout << "Weights for one side: " << endl;
    for (int i = 0; i < weights.size() - 1; i++)
    {
        cout << weights.at(i) << ", ";
    }

    std::cout << endl << "remainder: " << weights.at(weights.size() - 1) << endl;
}
