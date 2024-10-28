import { Button } from "@/components/ui/button";

  
  export default function Page() {
    return (
      <div className="grid grid-cols-5 gap-2">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Destructive</Button>
        <Button variant="link">Destructive</Button>
        <Button variant="outline">Destructive</Button>
        <Button variant="secondary">Destructive</Button>
      </div>
    );
  }
  