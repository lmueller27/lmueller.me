import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { setTitleString } from '../components/navbar';
import React from 'react';
import ProjectSlide from '@/components/projectSlides/projectSlide';

export default function Projects() {
    setTitleString("/projects")

    const projectList = [NoisyProject, EditrecsProject, ServerProject, FuseProject, WeatherProject]
    const slideshowLength = projectList.length
    const refs = [React.useRef<HTMLElement>(null), React.useRef<HTMLElement>(null), React.useRef<HTMLElement>(null), React.useRef<HTMLElement>(null), React.useRef<HTMLElement>(null)]
    var activeIndex: number = 0

    return (
        <Layout>
            <Head>
                <title>{siteTitle + ' | projects'}</title>
            </Head>
            <NoisyProject customRef={refs[0]} index={1} datastatus={"active"} />
            <EditrecsProject customRef={refs[1]} index={1} datastatus={"before"}></EditrecsProject>
            <ServerProject customRef={refs[2]} index={2} datastatus={"before"}></ServerProject>
            <FuseProject customRef={refs[3]} index={3} datastatus={"before"}></FuseProject>
            <WeatherProject customRef={refs[4]} index={4} datastatus={"after"}></WeatherProject>
        </Layout>
    );

    function nextSlide() {
        //setActiveIndex((activeIndex+1)%slideshowLength)
        var oldIndex = activeIndex
        refs[oldIndex].current?.setAttribute('data-status', 'after');
        activeIndex = (activeIndex + 1) % slideshowLength
        refs[activeIndex].current?.setAttribute('data-status', 'active');

        for (var i = 0; i < refs.length; i++) {
            if (i != oldIndex && i != activeIndex) {
                refs[i].current?.setAttribute('data-status', 'betweenBefore');
            }
        }
    }

    function prevSlide() {
        // Thanks Javascript... 
        //setActiveIndex(((activeIndex-1 % slideshowLength) + slideshowLength) % slideshowLength)
        var oldIndex = activeIndex
        refs[oldIndex].current?.setAttribute('data-status', 'before');
        activeIndex = ((activeIndex - 1 % slideshowLength) + slideshowLength) % slideshowLength
        refs[activeIndex].current?.setAttribute('data-status', 'active');

        for (var i = 0; i < refs.length; i++) {
            if (i != oldIndex && i != activeIndex) {
                refs[i].current?.setAttribute('data-status', 'betweenAfter');
            }
        }
    }

    function NoisyProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <ProjectSlide
                customRef={customRef}
                index={index}
                datastatus={datastatus}
                projectContent={{
                    title: 'Noise, Patterns and Textures',
                    imgPath: "/images/heads.png",
                    description: ["Add a variety of randomly generated noise, patterns and textures to your Fusion 360 objects.",
                        "Lets you enrich your models with anything from smooth randomized features to jagged distortion."],
                    repoUrl: "https://github.com/lmueller27/Fusion360PatternsAndTextures",
                    subtitle: 'A Fusion360 Plugin',
                    showLinkToRepo: true,
                }}
                next={nextSlide}
                previous={prevSlide} />
        )
    }

    function WeatherProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <ProjectSlide
                customRef={customRef}
                index={index}
                datastatus={datastatus}
                projectContent={{
                    title: 'Daily Weather History',
                    imgPath: "/images/daily-weather-history-app.png",
                    description: ["Visualize and compare weather trends for any geolocation.",
                        "Is today / this week / this month hotter than usual?"],
                    repoUrl: "https://github.com/lmueller27/daily-weather-history",
                    subtitle: 'A climate trend web app',
                    showLinkToRepo: true,
                }}
                next={nextSlide}
                previous={prevSlide} />
        )
    }

    function FuseProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <ProjectSlide
                customRef={customRef}
                index={index}
                datastatus={datastatus}
                projectContent={{
                    title: 'factFUSE',
                    imgPath: "/images/ffscreen.jpg",
                    description: ["Connect and mount Linked Data Platforms (LDPs) to Linux machines.",
                        "Lets you access and edit server data from the local file system and offers tools to interact with Memento history data."],
                    repoUrl: "https://git.rwth-aachen.de/i5/factdag/factfuse",
                    subtitle: 'A user-space file system for Linked Data Platforms',
                    showLinkToRepo: true,
                }}
                next={nextSlide}
                previous={prevSlide} />
        )
    }

    function EditrecsProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <ProjectSlide
                customRef={customRef}
                index={index}
                datastatus={datastatus}
                projectContent={{
                    title: 'EditRecs',
                    imgPath: "/images/editrecs.png",
                    description: ["This is a research project I developed for my masters thesis. An extension framework for Visual Studio Code that enables proactive point of interest recommendations for the developers current work context.",
                    "Work in Progress. More to come soon."],
                    repoUrl: "",
                    subtitle: 'A Visual Studio Code Extension',
                    showLinkToRepo: false,
                }}
                next={nextSlide}
                previous={prevSlide} />
        )
    }

    function ServerProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <ProjectSlide
                customRef={customRef}
                index={index}
                datastatus={datastatus}
                projectContent={{
                    title: 'FactServer',
                    imgPath: "/images/factserver2.png",
                    description: ["A prototype REST server architecture implementing the Linked Data Platform specifications, Memento-Protocol functionality, and a SPARQL backend.",
                    "For the semantic web."],
                    repoUrl: "https://git.rwth-aachen.de/i5/factdag/fact-server",
                    subtitle: 'A Linked Data Platform with Memento versioning',
                    showLinkToRepo: true,
                }}
                next={nextSlide}
                previous={prevSlide} />
        )
    }
}