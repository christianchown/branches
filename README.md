# Santander UK React coding assessment

This is a simple React app that does a location search for Santander UK branches.
Try typing *London* into the input.

Below are 3 feature requests, please choose any of them to do. 
Take your time, and consider that your solutions should be production-ready. 

We'll spend 45 minutes on the assessment, don't worry if you don't complete the work.

## Feature requests

1. The output for the services and accessibility in branch details are things like "CashMachines, CustomerServices". 

Can you make it more human readable? i.e. 

"First, AnotherItem, LastItem" -> "First, another item and last item"

2. We want to reuse the `closest` value in `<App />` in other components.

Can you refactor the state and effect logic into a `<ClosestProvider />`, and access the value in `<BranchDetails />` via a `useClosestBranch` hook?

3. When you type into the input, it fetches results as you type. 
When you type extra characters the display shows older values first as different results appear.

Can you prevent that?