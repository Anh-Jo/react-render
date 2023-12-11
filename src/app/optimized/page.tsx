import Image from "next/image";
import { ComponentDeep } from "../ComponentDeep";
import { GlobalProviderWrapper } from "../my-provider";
import {
  ComponentIncrementDeep,
  ComponentWithCount,
} from "./CompoenntConsomming";
import { CountProvider } from "../my-provider-optimized";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GlobalProviderWrapper>
        <CountProvider>
          <ComponentDeep number={1}>
            <ComponentDeep number={2}>
              <ComponentDeep number={3}>
                <>
                  <h1>hello</h1>
                  <ComponentIncrementDeep />
                  <ComponentWithCount />
                </>
              </ComponentDeep>
            </ComponentDeep>
          </ComponentDeep>
        </CountProvider>
      </GlobalProviderWrapper>
    </main>
  );
}
