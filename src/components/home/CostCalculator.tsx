import { useState, useEffect } from "react";
import { Calculator, DollarSign, TrendingDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
interface CostData {
  zapier: number;
  lambda: number;
  savings: number;
  savingsPercentage: number;
  breakEvenMonths: number;
}
export default function CostCalculator() {
  const [tasks, setTasks] = useState<number>(300000);
  const [apps, setApps] = useState<number>(5);
  const [complexity, setComplexity] = useState<string>("complex");
  const [pricingModel, setPricingModel] = useState<string>("usage");
  const [zapierPlan, setZapierPlan] = useState<string>("business");
  const [lambdaMemory, setLambdaMemory] = useState<number>(4096);
  const [executionTime, setExecutionTime] = useState<number>(280);
  const [costs, setCosts] = useState<CostData>({
    zapier: 0,
    lambda: 0,
    savings: 0,
    savingsPercentage: 0,
    breakEvenMonths: 3
  });

  // Recalculate costs whenever inputs change
  useEffect(() => {
    calculateCosts();
  }, [tasks, apps, complexity, pricingModel, zapierPlan, lambdaMemory, executionTime]);
  const calculateCosts = () => {
    // Zapier pricing logic based on the provided data
    let zapierCost = 299; // Business plan base cost
    let tasksIncluded = 50000;

    // Add costs for additional tasks beyond plan limits (1.25x cost)
    if (tasks > tasksIncluded) {
      const overageTasks = tasks - tasksIncluded;
      const taskCost = zapierCost / tasksIncluded; // Cost per task in the plan
      zapierCost += overageTasks * taskCost * 1.25; // 1.25x standard cost for overage
    }

    // Add cost for complex logic if needed
    if (complexity === "complex") {
      zapierCost *= 1.4; // 40% increase for complex workflows
    }

    // Add costs for many connected apps
    if (apps > 10) {
      zapierCost += (apps - 10) * 5; // $5 per additional app beyond 10
    }

    // Lambda pricing logic
    let lambdaCost = 0;
    if (pricingModel === "usage") {
      // Usage-based AWS Lambda pricing calculation
      const gbSeconds = tasks * (executionTime / 1000) * (lambdaMemory / 1024);
      const requestsCost = Math.max(0, tasks - 1000000) * (0.20 / 1000000); // $0.20 per million requests after free tier
      const computeCost = Math.max(0, gbSeconds - 400000) * 0.0000166667; // Cost per GB-second after free tier

      // Base platform cost + actual AWS costs
      const baseCost = 49; // JointUp base platform cost
      lambdaCost = baseCost + requestsCost + computeCost;
    } else {
      // Flat rate pricing model (simplified for business use)
      lambdaCost = tasks < 5000 ? 99 : tasks < 20000 ? 199 : 299;
    }

    // Add complexity factor
    if (complexity === "complex") {
      lambdaCost *= 1.2; // 20% increase for complex workflows
    }

    // Calculate savings
    const savings = zapierCost - lambdaCost;
    const savingsPercentage = zapierCost > 0 ? Math.round(savings / zapierCost * 100) : 0;

    // Calculate break-even point (assumes $1500 initial setup cost with JointUp)
    const setupCost = 1500;
    const monthlyBreakEven = savings > 0 ? Math.ceil(setupCost / savings) : 0;
    setCosts({
      zapier: Math.round(zapierCost),
      lambda: Math.round(lambdaCost),
      savings: Math.round(savings),
      savingsPercentage: savingsPercentage,
      breakEvenMonths: monthlyBreakEven
    });
  };
  return <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 rounded-lg bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Zapier Cost Calculator</h2>
          <p className="mt-4 text-lg text-gray-600">
            See how much you could save by switching from Zapier to custom AWS Lambda workflows
          </p>
          <p className="mt-2 text-md text-gray-500">
            Want to know how much Zapier is really costing you? Our calculator shows exactly what you're 
            spending on task-based automations — and your potential savings with AWS Lambda.
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
                <Input id="tasks" type="number" min={100} value={tasks} onChange={e => setTasks(Number(e.target.value))} className="font-mono" />
                <p className="text-xs text-gray-500">How many automation tasks run each month?</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zapierPlan">Current Zapier Plan</Label>
                <Select value={zapierPlan} onValueChange={setZapierPlan}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter ($19.99/mo, 750 tasks)</SelectItem>
                    <SelectItem value="professional">Professional ($49/mo, 2,000 tasks)</SelectItem>
                    <SelectItem value="team">Team ($99/mo, 2,000 tasks)</SelectItem>
                    <SelectItem value="business">Business ($299/mo, 50,000 tasks)</SelectItem>
                    <SelectItem value="company">Company ($599/mo, 100,000 tasks)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Your current Zapier subscription plan</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apps">Connected Apps</Label>
                <Input id="apps" type="number" min={1} max={50} value={apps} onChange={e => setApps(Number(e.target.value))} className="font-mono" />
                <p className="text-xs text-gray-500">How many different apps are you connecting?</p>
              </div>
              
              <div className="space-y-3">
                <Label>Workflow Complexity</Label>
                <RadioGroup value={complexity} onValueChange={setComplexity} className="flex flex-col space-y-2">
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
                <RadioGroup value={pricingModel} onValueChange={setPricingModel} className="flex flex-col space-y-2">
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
              
              {pricingModel === "usage" && <>
                  <div className="space-y-2">
                    <Label>Lambda Memory Allocation (MB)</Label>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm w-8">128</span>
                      <Slider value={[lambdaMemory]} onValueChange={values => setLambdaMemory(values[0])} min={128} max={3008} step={64} className="flex-1" />
                      <span className="text-sm w-12 text-right">{lambdaMemory}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Average Execution Time (ms)</Label>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm w-8">100</span>
                      <Slider value={[executionTime]} onValueChange={values => setExecutionTime(values[0])} min={100} max={1000} step={50} className="flex-1" />
                      <span className="text-sm w-12 text-right">{executionTime}</span>
                    </div>
                  </div>
                </>}
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
                
                {costs.breakEvenMonths > 0 && costs.breakEvenMonths < 24 && <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-sm font-medium text-gray-700">Break-Even Point</div>
                    <div className="mt-1 text-blue-700">
                      <span className="font-bold">{costs.breakEvenMonths} months</span> to recoup implementation costs
                    </div>
                  </div>}
                
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
    </div>;
}