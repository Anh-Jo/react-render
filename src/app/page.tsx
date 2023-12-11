import Image from "next/image";
import { ComponentDeep } from "./ComponentDeep";
import { GlobalProviderWrapper } from "./my-provider";
import {
  ComponentIncrementDeep,
  ComponentWithCount,
  ComponentWithCountRANDOM,
} from "./CompoenntConsomming";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GlobalProviderWrapper>
        <ComponentDeep number={1}>
          <ComponentDeep number={2}>
            <ComponentDeep number={3}>
              <>
                <h1>hello</h1>
                <ComponentIncrementDeep />
                <ComponentWithCount />
                <ComponentWithCountRANDOM />
              </>
            </ComponentDeep>
          </ComponentDeep>
        </ComponentDeep>
      </GlobalProviderWrapper>
    </main>
  );
}
