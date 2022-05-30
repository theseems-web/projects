import './App.css';
import ColorSwitch from "./components/ColorSwitch";
import Header from "./components/Header";
import Project from "./components/Project";
import Tag from "./components/Tag";
import LinkTag from "./components/LinkTag";
import GithubIcon from "./components/GithubIcon";
import HomepageIcon from "./components/HomepageIcon";
import IconList from "./components/IconList";

function App() {
    return (
        <div
            className="App dark:bg-gray-900 dark:text-gray-400 transition duration-700 flex flex-wrap align-middle"
            style={{flexDirection: 'column'}}>
            <IconList>
                <HomepageIcon href={"/"}/>
                <ColorSwitch/>
            </IconList>
            <div className="p-8 rounded-lg max-w-prose mx-auto">
                <div className="flex flex-wrap align-middle justify-center text-center mx-auto">
                    <Header title={"Projects"} description={"All of projects in which i was involved"}/>
                </div>
            </div>

            <div className="p-8 rounded-lg max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <Project title={"Droply"}>
                        <p className="font-light mt-2">
                            A minimalistic file transfer application using both P2P and centralized approaches.

                            I've been mainly involved in developing the backend of this application.
                        </p>

                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/beydex/droply-backend"}/>}/>
                            <Tag name={"Kotlin"}/>
                            <Tag name={"Ktor"}/>
                            <Tag name={"Spring"}/>
                        </div>
                    </Project>
                    <Project title={"ClinQ"}>
                        <p className="font-light mt-2">
                            An experimental validator supporting declarative-like checks
                            with a simple formal language under the hood.
                        </p>

                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/clinq"}/>}/>
                            <Tag name={"Java"}/>
                            <Tag name={"Validation"}/>
                        </div>
                    </Project>

                    <Project title={"TomShelBot"}>
                        <p className="font-light mt-2">
                            A Telegram Java SDK wrapper with many features such as: handlers (messages, updates,
                            etc.),
                            modularity (just put plugin's jar there and it works)
                            abstractions of different levels: storage, commands, polls, punishments
                        </p>
                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/tomshelbybot"}/>}/>
                            <Tag name={"Java"}/>
                            <Tag name={"Telegram"}/>
                        </div>
                    </Project>

                    <Project title={"TReports"}>
                        <p className="font-light mt-2">
                            A simple bug-report-ish system, were actually used in some of my
                            projects as a free alternative of some enterprise systems to collect
                            feedback from testers and track all of the bugs they found
                        </p>
                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/theseems/treports"}/>}/>
                            <Tag name={"Python"}/>
                            <Tag name={"Bug tracker"}/>
                        </div>
                    </Project>

                    <Project title={"AngouriMath"}>
                        <p className="font-light mt-2">
                            AM is a symbolic algebra library. I've introduced a discrete math module
                            there and made some other minor changes
                        </p>
                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/asc-community/AngouriMath"}/>}/>
                            <Tag name={"FOSS"}/>
                            <Tag name={"C#"}/>
                            <Tag name={"Math"}/>
                        </div>
                    </Project>

                    <Project title={"GenericTensor"}>
                        <p className="font-light mt-2">
                            This is a high-performance library for matrix and tensor calculus.
                            There i've implemented a LU and PLU decompositions
                        </p>
                        <div className={"flex align-middle items-center justify-center gap-4"}>
                            <LinkTag icon={<GithubIcon href={"https://github.com/asc-community/GenericTensor"}/>}/>
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
                            <LinkTag icon={<GithubIcon href={"https://github.com/asc-community/MxEngine"}/>}/>
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
