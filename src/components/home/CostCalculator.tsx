
import { useState, useEffect } from "react";
import { Calculator, DollarSign, TrendingDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

interface CostData {
  zapier: number;
  lambda: number;
  savings: number;
  savingsPercentage: number;
}

export default function CostCalculator() {
  const [tasks, setTasks] = useState<number>(5000);
  const [apps, setApps] = useState<number>(5);
  const [complexity, setComplexity] = useState<string>("simple");
  const [pricingModel, setPricingModel] = useState<string>("flat");
  const [costs, setCosts] = useState<CostData>({ zapier: 0, lambda: 0, savings: 0, savingsPercentage: 0 });

  // Recalculate costs whenever inputs change
  useEffect(() => {
    calculateCosts();
  }, [tasks, apps, complexity, pricingModel]);

  const calculateCosts = () => {
    // Zapier pricing logic (simplified example)
    let zapierCost = 0;
    
    if (tasks <= 750) {
      zapierCost = 19.99; // Starter plan
    } else if (tasks <= 2000) {
      zapierCost = 49; // Professional plan
    } else if (tasks <= 5000) {
      zapierCost = 69; // Team plan
    } else if (tasks <= 20000) {
      zapierCost = 299; // Company plan
    } else {
      zapierCost = 599; // Enterprise plan
    }
    
    // Add costs for additional tasks beyond plan limits
    if (tasks > 20000) {
      zapierCost += Math.ceil((tasks - 20000) / 5000) * 100;
    }
    
    // Add cost for complex logic if needed
    if (complexity === "complex") {
      zapierCost *= 1.5;
    }
    
    // Add costs for many connected apps
    if (apps > 10) {
      zapierCost += (apps - 10) * 5;
    }

    // Lambda pricing logic
    let lambdaCost = 0;
    
    if (pricingModel === "flat") {
      // Flat rate pricing model
      lambdaCost = tasks < 5000 ? 99 : (tasks < 15000 ? 199 : 299);
    } else {
      // Usage-based pricing model
      const requestCost = tasks * 0.0005; // $0.0005 per request
      const baseCost = 49; // Base platform cost
      lambdaCost = baseCost + requestCost;
    }
    
    // Add complexity factor
    if (complexity === "complex") {
      lambdaCost *= 1.2; // 20% increase for complex workflows
    }
    
    // Calculate savings
    const savings = zapierCost - lambdaCost;
    const savingsPercentage = Math.round((savings / zapierCost) * 100);
    
    setCosts({
      zapier: Math.round(zapierCost),
      lambda: Math.round(lambdaCost),
      savings: Math.round(savings),
      savingsPercentage: savingsPercentage
    });
  };

  return (
    <div className="bg-gray-50 py-16 md:py-20 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Zapier Cost Calculator</h2>
          <p className="mt-4 text-lg text-gray-600">
            See how much you could save by switching from Zapier to custom AWS Lambda workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 text-[#F97316]" />
                Calculate Your Costs
              </CardTitle>
              <CardDescription>
                Enter your current Zapier usage details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tasks">Monthly Tasks</Label>
                <Input
                  id="tasks"
                  type="number"
                  min={100}
                  value={tasks}
                  onChange={(e) => setTasks(Number(e.target.value))}
                  className="font-mono"
                />
                <p className="text-xs text-gray-500">How many automation tasks run each month?</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apps">Connected Apps</Label>
                <Input
                  id="apps"
                  type="number"
                  min={1}
                  max={50}
                  value={apps}
                  onChange={(e) => setApps(Number(e.target.value))}
                  className="font-mono"
                />
                <p className="text-xs text-gray-500">How many different apps are you connecting?</p>
              </div>
              
              <div className="space-y-3">
                <Label>Workflow Complexity</Label>
                <RadioGroup 
                  value={complexity} 
                  onValueChange={setComplexity}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="simple" id="simple" />
                    <Label htmlFor="simple" className="cursor-pointer">Simple (basic triggers and actions)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="complex" id="complex" />
                    <Label htmlFor="complex" className="cursor-pointer">Complex (conditional logic, multiple steps)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3">
                <Label>Lambda Pricing Model</Label>
                <RadioGroup 
                  value={pricingModel} 
                  onValueChange={setPricingModel}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flat" id="flat" />
                    <Label htmlFor="flat" className="cursor-pointer">Flat Monthly Rate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="usage" id="usage" />
                    <Label htmlFor="usage" className="cursor-pointer">Usage-Based Pricing</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 text-[#F97316]" />
                Your Estimated Savings
              </CardTitle>
              <CardDescription>
                See your potential cost savings with AWS Lambda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-500">Zapier Monthly Cost</div>
                    <div className="text-2xl font-bold mt-1">${costs.zapier}</div>
                  </div>
                  <div className="p-4 bg-brand-primary-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-500">Lambda Monthly Cost</div>
                    <div className="text-2xl font-bold mt-1">${costs.lambda}</div>
                  </div>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg border border-green-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Your Monthly Savings</div>
                    <div className="text-3xl font-bold text-green-600 mt-1">${costs.savings}</div>
                  </div>
                  <div className="flex items-center font-bold text-xl text-green-600">
                    <TrendingDown className="mr-1" />
                    {costs.savingsPercentage}%
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Switch to custom AWS Lambda workflows and save up to ${Math.round(costs.savings * 12)} per year.
                  </p>
                  <Button className="w-full bg-brand-primary-400 text-black hover:bg-brand-primary-500">
                    Get Your Free Integration Audit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-sm text-gray-500 text-center">
          <p>
            Calculations are estimates based on current Zapier pricing and typical AWS Lambda implementation costs.
            Actual savings may vary based on your specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
