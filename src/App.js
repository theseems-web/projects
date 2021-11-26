import './App.css';
import ColorSwitch from "./components/ColorSwitch";
import Header from "./components/Header";
import Project from "./components/Project";
import Tag from "./components/Tag";
import LinkTag from "./components/LinkTag";
import GithubIcon from "./components/GithubIcon";

function App() {
    return (
        <div
            className="App dark:bg-gray-900 dark:text-gray-400 transition duration-700 flex flex-wrap align-middle"
            style={{flexDirection: 'column'}}>
            <ColorSwitch/>
            <div className="p-8 rounded-lg max-w-prose mx-auto">
                <div className="flex flex-wrap align-middle justify-center text-center mx-auto">
                    <Header title={"Projects"}
                            description={"All of projects in which i was involved"}/>
                </div>
            </div>

            <div className="p-8 rounded-lg max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Project title={"ClinQ"}>
                        <p className="font-light mt-2">
                            An experimental "fluent" validator supporting declarative-like checks
                            with a simple formal language under the hood.

                            This is made just for experiments, but i really like it in action in some cases.
                        </p>

                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/clinq"}/>}/>
                            <Tag name={"Java"}/>
                            <Tag name={"Validation"}/>
                        </div>
                    </Project>

                    <Project title={"TomShelBot"}>
                        <p className="font-light mt-2">
                            A Telegram Java SDK wrapper with such convenient features as: handlers (messages, updates,
                            etc.),
                            modularity (just put plugin's jar there and it works)
                            abstractions of different levels: storage, commands, polls, punishments
                        </p>


                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/clinq"}/>}/>
                            <Tag name={"Java"}/>
                            <Tag name={"Telegram"}/>
                        </div>
                    </Project>

                    <Project title={"TReports"}>
                        <p className="font-light mt-2">
                            A simple bug-report-ish system, were actually used in some of my
                            projects as a free alternative of some enterprise systems to collect
                            feedback from testers and track all of bugs they find
                        </p>


                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/clinq"}/>}/>
                            <Tag name={"Python"}/>
                            <Tag name={"Bug tracker"}/>
                        </div>
                    </Project>

                    <Project title={"AngouriMath"}>
                        <p className="font-light mt-2">
                            AM is a symbolic algebra library. I've started a discrete math module
                            there and made some other minor changes
                        </p>


                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/clinq"}/>}/>
                            <Tag name={"FOSS"}/>
                            <Tag name={"C#"}/>
                            <Tag name={"Math"}/>
                        </div>
                    </Project>

                    <Project title={"GenericTensor"}>
                        <p className="font-light mt-2">
                            This is a fast library for the purposes of matrices and tensor calculations.
                            There i've implemented a LU and PLU decompositions
                        </p>


                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/clinq"}/>}/>
                            <Tag name={"FOSS"}/>
                            <Tag name={"C#"}/>
                            <Tag name={"Math"}/>
                        </div>
                    </Project>

                    <Project title={"MxEngine"}>
                        <p className="font-light mt-2">
                            MxEngine is a graphics engine made from scratch.
                            There i've fixed some bugs in a texture manipulation tools
                        </p>


                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/clinq"}/>}/>
                            <Tag name={"FOSS"}/>
                            <Tag name={"C++"}/>
                            <Tag name={"CG"}/>
                        </div>
                    </Project>

                </div>
            </div>
        </div>
    )
}

export default App;
